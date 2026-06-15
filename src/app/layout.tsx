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
  keywords: [
    "Himanshu Raj",
    "Himanshu Raj BBA",
    "Himanshu BBA",
    "Himanshu Raj JBIT",
    "Himanshu Raj JB Institute of Technology",
    "Himanshu Raj Dehradun",
    "Himanshu Raj UTU",
    "Himanshu Raj Uttarakhand Technical University",
    "Himanshu Raj Student Entrepreneur",
    "Himanshu Raj Startup Founder",
    "Himanshu Raj Business Operations",
    "Himanshu Raj AI Workflows",
    "Himanshu Raj Digital Systems",
    "Himanshu Raj Entrepreneurship",
    "Himanshu Raj Startup Presentation",
    "Himanshu Raj Gaurdeo",
    "Himanshu Raj Guardeo",
    "Himanshu Raj VEOMA AI",
    "Himanshu Raj JBIT Dehradun"
  ],
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
      {
        url: "/srijan-startup-competition-winner.webp",
        width: 1402,
        height: 1122,
        alt: "Himanshu Raj receiving Winner Award at Srijan Startup Project Presentation Competition",
      },
      {
        url: "/gaurdeo-startup-presentation.webp",
        width: 1402,
        height: 1122,
        alt: "Himanshu Raj presenting Gaurdeo startup idea before Uttarakhand Technical University leadership",
      },
      {
        url: "/investor-interaction-sachin-karnatak.webp",
        width: 1448,
        height: 1086,
        alt: "Himanshu Raj interacting with startup founder Sachint Karnatak during an entrepreneurship and fundraising discussion",
      },
      {
        url: "/founders-day-winner.webp",
        width: 1405,
        height: 1120,
        alt: "Himanshu Raj receiving Founders Day innovation award for AI implementation in business",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Raj | Business Operations, Digital Systems & AI Workflows",
    description:
      "Himanshu Raj is a BBA student at JBIT Dehradun building digital systems, websites, content operations, workflow automation, and exploring AI for business execution.",
    images: ["/og-image.png", "/srijan-startup-competition-winner.webp", "/gaurdeo-startup-presentation.webp", "/investor-interaction-sachin-karnatak.webp", "/founders-day-winner.webp"],
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
        "jobTitle": "BBA Student",
        "description": "Himanshu Raj is a BBA student at JBIT Dehradun building digital systems, websites, content operations, workflow automation, and exploring AI for business execution.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dehradun",
          "addressRegion": "Uttarakhand",
          "addressCountry": "India"
        },
        "sameAs": [
          "https://www.linkedin.com/in/himanshu-raj-74323237a/",
          "https://www.instagram.com/himanshuohk/"
        ],
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "JB Institute of Technology",
            "alternateName": "JBIT Dehradun",
            "url": "https://jbitdoon.edu.in"
          },
          {
            "@type": "EducationalOrganization",
            "name": "Uttarakhand Technical University",
            "alternateName": "UTU",
            "url": "https://uktech.ac.in"
          }
        ],
        "knowsAbout": [
          "Business Operations",
          "Digital Systems",
          "Workflow Automation",
          "AI Workflows",
          "Entrepreneurship",
          "Startup Exploration"
        ],
        "keywords": "Himanshu Raj, Himanshu Raj BBA, Himanshu BBA, Himanshu Raj JBIT, Himanshu Raj JB Institute of Technology, Himanshu Raj Dehradun, Himanshu Raj UTU, Himanshu Raj Uttarakhand Technical University, Himanshu Raj Student Entrepreneur, Himanshu Raj Startup Founder, Himanshu Raj Business Operations, Himanshu Raj AI Workflows, Himanshu Raj Digital Systems, Himanshu Raj Entrepreneurship, Himanshu Raj Startup Presentation, Himanshu Raj Gaurdeo, Himanshu Raj Guardeo, Himanshu Raj VEOMA AI, Himanshu Raj JBIT Dehradun",
        "award": [
          "Winner — Srijan Startup Presentation Competition",
          "Presenting Gaurdeo to UTU Leadership",
          "Meeting Startup Investors",
          "Founders Day Winner"
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
      },
      {
        "@type": "CreativeWork",
        "@id": "https://himanshuraj.me/#achievement-srijan",
        "name": "Winner — Srijan Startup Presentation Competition",
        "creator": {
          "@id": "https://himanshuraj.me/#person"
        },
        "description": "Presented a startup idea during the Srijan Project Presentation Competition and was selected as the winner after evaluation by an IIT Roorkee professor.",
        "image": {
          "@type": "ImageObject",
          "url": "https://himanshuraj.me/srijan-startup-competition-winner.webp",
          "caption": "Himanshu Raj presenting a startup idea before IIT Roorkee professors and winning the Srijan Project Presentation Competition.",
          "name": "Himanshu Raj - Winner of Srijan Startup Presentation Competition"
        },
        "keywords": "Himanshu Raj, Srijan Competition, Srijan Project Presentation, Startup Competition Winner, IIT Roorkee Professor, Business Innovation Competition, Student Startup Competition, Entrepreneurship Competition, Project Presentation Winner"
      },
      {
        "@type": "CreativeWork",
        "@id": "https://himanshuraj.me/#achievement-gaurdeo",
        "name": "Presenting Gaurdeo to UTU Leadership",
        "creator": {
          "@id": "https://himanshuraj.me/#person"
        },
        "description": "Received the opportunity to present Gaurdeo before the Chairman of Uttarakhand Technical University (UTU Chairman) during a startup presentation.",
        "image": {
          "@type": "ImageObject",
          "url": "https://himanshuraj.me/gaurdeo-startup-presentation.webp",
          "caption": "Himanshu Raj presenting Gaurdeo, a startup concept, before the Chairman of Uttarakhand Technical University.",
          "name": "Himanshu Raj presenting Gaurdeo Startup"
        },
        "keywords": "Himanshu Raj, Gaurdeo, Guardeo, Gaurdeo Startup, Startup Pitch, UTU Chairman, Uttarakhand Technical University Chairman, Student Entrepreneurship, Business Presentation, Startup Showcase"
      },
      {
        "@type": "CreativeWork",
        "@id": "https://himanshuraj.me/#achievement-investor",
        "name": "Meeting Startup Investors",
        "creator": {
          "@id": "https://himanshuraj.me/#person"
        },
        "description": "Selected for an interaction session with Sachint Karnatak, founder of POCONUT, a startup valued at over ₹150 crore. Discussed fundraising, early-stage startup challenges, team building, and lessons from the entrepreneurial journey.",
        "image": {
          "@type": "ImageObject",
          "url": "https://himanshuraj.me/investor-interaction-sachin-karnatak.webp",
          "caption": "Himanshu Raj participating in an investor-focused discussion with Sachint Karnatak, founder of POCONUT, covering fundraising, startup growth, and team building.",
          "name": "Himanshu Raj with POCONUT Founder Sachint Karnatak"
        },
        "keywords": "Himanshu Raj, Himanshu Raj BBA, Himanshu BBA, Himanshu Raj JBIT, Himanshu Raj JB Institute of Technology, Himanshu Raj UTU, Himanshu Raj Entrepreneurship, Himanshu Raj Startup, Himanshu Raj Investor Meeting, Himanshu Raj Startup Founder, Himanshu Raj Fundraising, Himanshu Raj Startup Growth, Sachint Karnatak, POCONUT, POCONUT Founder, Startup Fundraising, Early Stage Startup, Entrepreneurship, Startup Team Building, Business Leadership"
      },
      {
        "@type": "CreativeWork",
        "@id": "https://himanshuraj.me/#achievement-foundersday",
        "name": "Founders Day Winner",
        "creator": {
          "@id": "https://himanshuraj.me/#person"
        },
        "description": "Received recognition on Founders Day for presenting an innovative idea focused on AI implementation in business. The project was selected as the winning entry and highlighted practical applications of AI for improving business operations, productivity, and decision-making.",
        "image": {
          "@type": "ImageObject",
          "url": "https://himanshuraj.me/founders-day-winner.webp",
          "caption": "Himanshu Raj receiving recognition for an award-winning project focused on AI implementation and business innovation.",
          "name": "Himanshu Raj - Founders Day Winner"
        },
        "keywords": "Himanshu Raj, Himanshu Raj BBA, Himanshu BBA, Himanshu Raj JBIT, Himanshu Raj JB Institute of Technology, Himanshu Raj UTU, Himanshu Raj AI, Himanshu Raj AI Workflows, Himanshu Raj Business Innovation, Himanshu Raj Founders Day, Himanshu Raj Award, Himanshu Raj Winner, Himanshu Raj Artificial Intelligence, Himanshu Raj AI Implementation, Himanshu Raj Entrepreneurship, AI Implementation in Business, Business Innovation, Innovation Award, Founders Day Competition, Student Innovation, Digital Transformation, Business Operations"
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
