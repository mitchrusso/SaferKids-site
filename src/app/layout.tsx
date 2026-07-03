import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { absoluteUrl, defaultDescription, jsonLd, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Safer Kids | Safety-First Parent Shopping Guide", template: `%s | ${siteName}` },
  description: defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Safer Kids | Safety-First Parent Shopping Guide",
    description: defaultDescription,
    url: siteUrl,
    siteName,
    images: [{ url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80", width: 1200, height: 800, alt: "Parent holding a child's hand outdoors" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Safer Kids | Safety-First Parent Shopping Guide", description: defaultDescription, images: ["https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80"] },
};

const websiteJsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "Organization", "@id": absoluteUrl("/#organization"), name: siteName, url: siteUrl, sameAs: [] }, { "@type": "WebSite", "@id": absoluteUrl("/#website"), name: siteName, url: siteUrl, publisher: { "@id": absoluteUrl("/#organization") }, inLanguage: "en-US" }] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning><body className="min-h-full flex flex-col" suppressHydrationWarning><script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(websiteJsonLd)} />{children}</body></html>;
}
