import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zedx Technologies — Premium Software Development Agency",
  description:
    "Zedx Technologies builds world-class software products — web apps, mobile apps, SaaS platforms, AI solutions, and custom software for startups and enterprises.",
  keywords: [
    "software development agency",
    "web development",
    "mobile app development",
    "SaaS development",
    "AI solutions",
    "custom software",
    "Zedx Technologies",
  ],
  authors: [{ name: "Zedx Technologies" }],
  openGraph: {
    title: "Zedx Technologies — Premium Software Development Agency",
    description:
      "We build powerful digital products that scale. Web, mobile, SaaS, AI — crafted with precision.",
    type: "website",
    url: "https://zedxtechnologies.com",
  },
  twitter: {
    card: "summary_large_image",
    site: "@connectzedx",
    title: "Zedx Technologies",
    description: "Premium Software Development Agency",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400&family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
