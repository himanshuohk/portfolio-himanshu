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
  title: "Himanshu Raj | Operations & Growth Systems",
  description:
    "BBA student building systems, websites, content operations, workflow automation, and exploring AI for business execution.",
  openGraph: {
    title: "Himanshu Raj | Operations & Growth Systems",
    description:
      "BBA student building systems, websites, content operations, workflow automation, and exploring AI for business execution.",
    url: "https://portfolio-himanshu.vercel.app",
    siteName: "Himanshu Raj Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Himanshu Raj | Operations & Growth Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Raj | Operations & Growth Systems",
    description:
      "BBA student building systems, websites, content operations, workflow automation, and exploring AI for business execution.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
