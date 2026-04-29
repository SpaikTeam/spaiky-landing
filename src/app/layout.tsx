import type { Metadata } from "next";
import { Fredoka, DM_Sans } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://spaiky.app";
const TITLE = "Spaiky - Learn AI the Fun Way";
const DESCRIPTION =
  "Spaiky turns AI into a game. Short lessons on prompting, machine learning, and more. Five minutes a day, no tech background needed.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Spaiky",
  keywords: [
    "AI learning",
    "learn AI",
    "AI prompting",
    "machine learning",
    "gamified learning",
    "AI course",
    "learn ChatGPT",
  ],
  authors: [{ name: "Spaiky" }],
  creator: "Spaiky",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Spaiky",
    locale: "en_US",
    images: [
      {
        url: "/mascots/hero.png",
        width: 500,
        height: 500,
        alt: "Spaiky mascot waving",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/mascots/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Spaiky",
  legalName: "Spaik Solutions",
  url: SITE_URL,
  logo: `${SITE_URL}/mascots/hero.png`,
  description: DESCRIPTION,
  email: "contact@spaiky.app",
  sameAs: [
    "https://play.google.com/store/apps/details?id=com.spaiky.app",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Spaiky",
  url: SITE_URL,
  description: DESCRIPTION,
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    name: "Spaik Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${fredoka.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
