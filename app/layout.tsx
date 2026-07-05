import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ijaz Ahammad Shaik | Full-Stack Engineer",
  description: "Full-Stack / Backend-leaning Engineer specializing in React, AWS Serverless, Node.js, and performance optimization. Building scalable solutions with modern technologies.",
  keywords: ["Full-Stack Developer", "AWS", "React", "Node.js", "TypeScript", "Software Engineer"],
  authors: [{ name: "Ijaz Ahammad Shaik" }],
  openGraph: {
    title: "Ijaz Ahammad Shaik | Full-Stack Engineer",
    description: "Full-Stack / Backend-leaning Engineer specializing in React, AWS Serverless, and Node.js",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=Creepster&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-sans antialiased relative"
        style={{
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        <div 
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/mainThemeLogo.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.5,
          }}
        />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
