import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  title: "Muhammad Asif Raihan | Founder of Backbenchers University",
  description: "Motivational creator, community builder & founder of Backbenchers University. 130K+ YouTube subscribers. 300K+ Facebook followers.",
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
      </head>
      <body className="font-sans">
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
