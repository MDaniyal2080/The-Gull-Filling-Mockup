import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const heading = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

export const metadata: Metadata = {
  title: "The Gut Filling — Houston, TX",
  description:
    "Clean, fast website prototype for The Gut Filling: services, recipes, cookbooks, gallery, and booking.",
  ...(metadataBase ? { metadataBase } : {}),
  openGraph: {
    title: "The Gut Filling",
    description:
      "Food that unites. Prototype site for services, recipes, and bookings in Houston.",
    type: "website",
    images: [
      { url: "/og.svg", width: 1200, height: 630, alt: "The Gut Filling" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Gut Filling",
    description:
      "Food that unites. Prototype site for services, recipes, and bookings in Houston.",
    images: ["/og.svg"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${heading.variable} antialiased`}>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-white focus:text-slate-900 focus:ring-2 focus:ring-black/10 dark:focus:bg-black dark:focus:text-white dark:focus:ring-white/20"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
