import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://himanshuraj.me"),
  title: "Himanshu Raj | Business Operations, Digital Systems & AI Workflows",
  description:
    "Himanshu Raj is a BBA student at JBIT Dehradun building digital systems, websites, content operations, workflow automation, and exploring AI for business execution.",
  alternates: {
    canonical: "https://himanshuraj.me",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Himanshu Raj | Business Operations, Digital Systems & AI Workflows",
    description:
      "Himanshu Raj is a BBA student at JBIT Dehradun building digital systems, websites, content operations, workflow automation, and exploring AI for business execution.",
    url: "https://himanshuraj.me",
    siteName: "Himanshu Raj Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Himanshu Raj | Business Operations, Digital Systems & AI Workflows",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Raj | Business Operations, Digital Systems & AI Workflows",
    description:
      "Himanshu Raj is a BBA student at JBIT Dehradun building digital systems, websites, content operations, workflow automation, and exploring AI for business execution.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://himanshuraj.me/#person",
        "name": "Himanshu Raj",
        "url": "https://himanshuraj.me",
        "description": "BBA student focused on business operations, digital systems, workflow automation, websites, AI exploration, and startup building.",
        "sameAs": [
          "https://www.linkedin.com/in/himanshu-raj-74323237a/",
          "https://www.instagram.com/himanshuohk/"
        ],
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "JB Institute of Technology",
            "alternateName": "JBIT Dehradun"
          },
          {
            "@type": "EducationalOrganization",
            "name": "Uttarakhand Technical University",
            "alternateName": "UTU"
          }
        ],
        "memberOf": [
          {
            "@id": "https://himanshuraj.me/#organization"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://himanshuraj.me/#organization",
        "name": "VEOMA AI",
        "url": "https://veoma.ai",
        "logo": "https://himanshuraj.me/og-image.png",
        "description": "AI startup focused on workflows, digital systems, and business automation.",
        "founder": {
          "@id": "https://himanshuraj.me/#person"
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
