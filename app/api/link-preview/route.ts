import type { NextRequest } from "next/server";

type PreviewPayload = {
  url: string;
  title: string | null;
  description: string | null;
  image: string | null;
  screenshot: string | null;
  siteName: string | null;
};

const previewCache = new Map<string, { data: PreviewPayload; expires: number }>();
const CACHE_TTL_MS = 1000 * 60 * 60 * 12; // 12 hours

function getUdemyCertificateImage(url: string): string | null {
  const match = /udemy\.com\/certificate\/(UC-[A-Za-z0-9-]+)/i.exec(url);
  if (!match) return null;
  return `https://udemy-certificate.s3.amazonaws.com/image/${match[1]}.jpg`;
}

function getCourseraCertificateImage(url: string): string | null {
  const match =
    /coursera\.org\/account\/accomplishments\/(?:verify|certificate)\/([A-Z0-9]+)/i.exec(
      url
    );
  if (!match) return null;
  const id = match[1];
  return `https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~${id}/CERTIFICATE_LANDING_PAGE~${id}.jpeg`;
}

function getKnownCertificateImage(url: string): string | null {
  return getUdemyCertificateImage(url) ?? getCourseraCertificateImage(url);
}

function extractMeta(html: string, property: string): string | null {
  const patterns = [
    new RegExp(
      `<meta[^>]+(?:property|name)=["']${property}["'][^>]+content=["']([^"']+)["']`,
      "i"
    ),
    new RegExp(
      `<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${property}["']`,
      "i"
    ),
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match?.[1]) return match[1];
  }
  return null;
}

async function fetchMicrolink(url: string): Promise<Partial<PreviewPayload>> {
  const endpoint = new URL("https://api.microlink.io");
  endpoint.searchParams.set("url", url);
  endpoint.searchParams.set("screenshot", "true");
  endpoint.searchParams.set("meta", "true");

  const response = await fetch(endpoint.toString(), {
    next: { revalidate: 60 * 60 * 12 },
  });

  if (!response.ok) return {};

  const json = await response.json();
  if (json.status !== "success" || !json.data) return {};

  const data = json.data;
  const image =
    typeof data.image === "string"
      ? data.image
      : data.image?.url ?? null;
  const screenshot =
    typeof data.screenshot === "string"
      ? data.screenshot
      : data.screenshot?.url ?? null;

  return {
    title: data.title ?? null,
    description: data.description ?? null,
    image,
    screenshot,
    siteName: data.publisher ?? data.author ?? null,
  };
}

async function fetchOpenGraph(url: string): Promise<Partial<PreviewPayload>> {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; PortfolioPreviewBot/1.0; +https://localhost)",
        Accept: "text/html",
      },
      next: { revalidate: 60 * 60 * 12 },
    });

    if (!response.ok) return {};
    const html = await response.text();

    return {
      title: extractMeta(html, "og:title") ?? extractMeta(html, "twitter:title"),
      description:
        extractMeta(html, "og:description") ??
        extractMeta(html, "twitter:description"),
      image: extractMeta(html, "og:image") ?? extractMeta(html, "twitter:image"),
      siteName: extractMeta(html, "og:site_name"),
    };
  } catch {
    return {};
  }
}

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");

  if (!url) {
    return Response.json({ error: "Missing url" }, { status: 400 });
  }

  try {
    const parsed = new URL(url);
    if (!["http:", "https:"].includes(parsed.protocol)) {
      return Response.json({ error: "Invalid url" }, { status: 400 });
    }
  } catch {
    return Response.json({ error: "Invalid url" }, { status: 400 });
  }

  const cached = previewCache.get(url);
  if (cached && cached.expires > Date.now()) {
    return Response.json(cached.data);
  }

  const knownImage = getKnownCertificateImage(url);
  const empty: Partial<PreviewPayload> = {};
  const [microlink, openGraph] = await Promise.all([
    fetchMicrolink(url).catch(() => empty),
    fetchOpenGraph(url).catch(() => empty),
  ]);

  const data: PreviewPayload = {
    url,
    title: microlink.title ?? openGraph.title ?? null,
    description: microlink.description ?? openGraph.description ?? null,
    image: knownImage ?? microlink.image ?? openGraph.image ?? null,
    screenshot: microlink.screenshot ?? null,
    siteName: microlink.siteName ?? openGraph.siteName ?? null,
  };

  previewCache.set(url, { data, expires: Date.now() + CACHE_TTL_MS });

  return Response.json(data, {
    headers: {
      "Cache-Control": "public, s-maxage=43200, stale-while-revalidate=86400",
    },
  });
}
