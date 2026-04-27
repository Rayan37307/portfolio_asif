import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Muhammad Asif Raihan",
  "url": "https://asif.com",
  "jobTitle": "Founder",
  "worksFor": {
    "@type": "Organization",
    "name": "Backbenchers University"
  },
  "sameAs": [
    "https://youtube.com/channel/UCE6hrW3g0K_sj3XLvBxIC0g",
    "https://facebook.com/your-profile"
  ]
};

export const metadata: Metadata = {
  title: "Muhammad Asif Raihan | Founder of Backbenchers University",
  description: "Motivational creator, community builder & founder of Backbenchers University. 130K+ YouTube subscribers. 300K+ Facebook followers.",
  openGraph: {
    title: "Muhammad Asif Raihan | Founder of Backbenchers University",
    description: "Motivational creator, community builder & founder of Backbenchers University. 130K+ YouTube subscribers. 300K+ Facebook followers.",
    url: "https://asif.com", // Replace with real URL later
    siteName: "Muhammad Asif Raihan Portfolio",
    images: [
      {
        url: "/creator_portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Asif Raihan Portrait",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Asif Raihan | Founder of Backbenchers University",
    description: "Motivational creator, community builder & founder of Backbenchers University.",
    images: ["/creator_portrait.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&f[]=clash-display@400,500,600,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans lg:cursor-none">
        <LoadingScreen />
        <CustomCursor />
        <SmoothScroll>
          <div className="app-wrapper">
            <Header />
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
