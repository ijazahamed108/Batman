# Portfolio App — Agent Context

> Batman/Gotham-themed personal portfolio for **Ijaz Ahammad Shaik**.
> Next.js App Router, TypeScript, Tailwind CSS, Framer Motion.
> Single-page site; navigation is in-page section scrolling, not multi-route pages.

## Quick facts

| Item | Value |
|------|--------|
| Package name | `portfolio` |
| Framework | Next.js 16 (App Router) + React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 + custom Gotham theme in `app/globals.css` |
| Animation | Framer Motion (`lib/motion.ts` presets) |
| Email | Resend via `POST /api/contact` (`RESEND_API_KEY`) |
| i18n | Custom (`en` \| `te` \| `hi`) — NOT next-intl routing |
| Path alias | `@/*` → project root |
| Primary page | `/` only (plus API + 404) |

## Mental model

This is **not** a multi-page marketing site. Treat it as:

1. One React tree on `/` composed of stacked `<section id="...">` blocks.
2. Navbar “routes” = smooth scroll to section IDs.
3. Two backend Route Handlers for contact email and link previews.
4. Content split between structured data (`data/content.ts`) and UI strings (`lib/translations.ts`).

## Directory map

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout: metadata, fonts, theme background
│   ├── page.tsx            # Home: LanguageProvider + all sections
│   ├── not-found.tsx       # Custom 404 (“Lost in the Shadows”)
│   ├── globals.css         # Theme tokens, utilities, cinematic styles
│   └── api/
│       ├── contact/route.ts       # POST contact form → Resend
│       └── link-preview/route.ts  # GET OG/Microlink/cert image preview
├── components/
│   ├── layout/             # Navbar, Footer, ScrollProgress, SectionTransition,
│   │                       # SectionDivider, HomeAboutBridge, InitialLogoAnimation
│   ├── sections/           # Hero, About, Skills, Experience, Projects,
│   │                       # Certifications, Education, Contact
│   └── ui/                 # button, card, BatmanLogo, LanguageSelector,
│                           # CertificateHoverPreview, MediumIcon
├── data/content.ts         # Canonical portfolio data (EN)
├── lib/
│   ├── LanguageContext.tsx # language state + document.documentElement.lang
│   ├── translations.ts     # All translated UI copy
│   ├── useTranslation.ts   # translations[language]
│   ├── useActiveSection.ts # SECTION_IDS, scroll spy, scrollToSection()
│   ├── motion.ts           # fadeUp, slideIn, viewport presets
│   └── utils.ts            # cn() = clsx + tailwind-merge
├── public/                 # Static assets (mainThemeLogo, companyLogos, skillLogos)
├── __tests__/portfolio.test.ts
└── Docs: README.md, QUICKSTART.md, DEPLOYMENT.md, EMAIL_SETUP.md, PROJECT_SUMMARY.md
```

## Routing

### Next.js routes

| Method/Path | Handler | Notes |
|-------------|---------|--------|
| `GET /` | `app/page.tsx` | Only UI page |
| `GET` unknown | `app/not-found.tsx` | Themed 404 with link home |
| `POST /api/contact` | `app/api/contact/route.ts` | Body: `{ name, email, message }` |
| `GET /api/link-preview?url=` | `app/api/link-preview/route.ts` | Returns title/description/image/screenshot |

No `app/about/page.tsx`, no locale prefixes, no middleware.

### In-page section navigation

Section IDs (must stay in sync with Navbar + `SECTION_IDS` in `lib/useActiveSection.ts`):

| Order | Component | `id` |
|-------|-----------|------|
| 1 | Hero | `home` |
| 2 | About | `about` |
| 3 | Skills | `skills` |
| 4 | Experience | `experience` |
| 5 | Projects | `projects` |
| 6 | Certifications | `certifications` |
| 7 | Education | `education` |
| 8 | Contact | `contact` |

- Navbar items use `#home`, `#about`, … but click handlers call `scrollToSection(id)`.
- `useActiveSection()` tracks which section intersects a ~88px nav offset; bottom of page forces `contact`.
- Deep-linking via `#section` may work via browser defaults, but primary UX is programmatic smooth scroll.

### Composition order (`app/page.tsx`)

```
LanguageProvider
  InitialLogoAnimation
  ScrollProgress
  SectionTransition
  Navbar
  Hero → HomeAboutBridge → About
  [SectionDivider between remaining sections]
  Skills → Experience → Projects → Certifications → Education → Contact
  Footer
```

## Data & i18n conventions

### `data/content.ts` exports

- `personalInfo` — name, role, contacts, social URLs
- `summary`, `aboutPitch`
- `experience` — companies, achievements, tech, logos
- `skills` — categorized skill lists
- `projects` — title, description, tech, category (for filters)
- `awards`, `certifications`, `education`

Use this file when changing **facts** (jobs, projects, cert URLs, emails).

### `lib/translations.ts`

- `Language = "en" | "te" | "hi"`
- Nested keys: `nav`, `hero`, `about`, `skills`, … matching UI surface
- Prefer `useTranslation()` in sections; Navbar sometimes reads `translations[language].nav` directly

When adding UI copy: update **all three** languages. When adding a section: add nav label + section strings + a section `id` + Navbar entry + `SECTION_IDS`.

### Language runtime

- `LanguageProvider` wraps only the home page tree (not in root layout).
- Default language: `"en"`.
- Changing language sets `document.documentElement.lang`.

## API details agents should know

### Contact (`POST /api/contact`)

- Requires `RESEND_API_KEY`; otherwise 500 `{ success: false, error: 'Email service not configured' }`.
- Sends to `ijazahamed.cse@gmail.com`, `replyTo` = submitter email.
- Client: `components/sections/Contact.tsx`.

### Link preview (`GET /api/link-preview`)

- Query param `url` required (http/https only).
- In-memory cache TTL 12h.
- Merges Microlink + Open Graph; special-cases Udemy/Coursera certificate image URLs.
- Used by `CertificateHoverPreview` for hover cards.
- Remote image hosts allowlisted in `next.config.ts` `images.remotePatterns`.

## Design / theme notes

- Dark mode forced: `<html className="dark">`.
- Gotham aesthetic: dark backgrounds, yellow/primary “bat-signal” accents, glass panels, glow utilities in CSS.
- Fonts: Inter (body), Space Grotesk (display), Creepster (accent) via Google Fonts in layout.
- Fixed background image: `/mainThemeLogo.png` at 50% opacity behind content.
- Prefer existing motion helpers (`fadeUp`, `slideIn`) over ad-hoc animation configs when extending sections.
- UI primitives follow shadcn-style patterns (`button`, `card` + `cn`).

## Common change recipes

| Goal | Touch |
|------|--------|
| Edit resume content | `data/content.ts` (+ translations if mirrored) |
| Add/rename a section | New section component, wire in `page.tsx`, set `id`, update Navbar + `SECTION_IDS` + translations |
| Change theme colors | `app/globals.css` / Tailwind theme tokens |
| Fix scroll spy / nav highlight | `lib/useActiveSection.ts` |
| Contact email delivery | `app/api/contact/route.ts` + env `RESEND_API_KEY` |
| Cert hover images | `app/api/link-preview/route.ts`, `CertificateHoverPreview.tsx`, `next.config.ts` images |
| New language | Extend `Language` type + full object in `translations.ts` + `LanguageSelector` |

## Scripts

```bash
npm run dev      # next dev
npm run build    # next build
npm run start    # next start
npm run lint     # eslint
```

## Env

- `RESEND_API_KEY` — required for contact form in production.

## Out of scope / gotchas

- `next-intl` is listed in dependencies but **not** used for routing or message loading; do not assume locale URL segments.
- Root layout does **not** include `LanguageProvider`; only `page.tsx` does — 404 page has no i18n provider.
- README/PROJECT_SUMMARY may lag (e.g. “Next 15”); trust `package.json` (Next 16.1.6) and the source tree.
- Prefer editing existing section/layout files over inventing new route pages unless explicitly requested.
