import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "007 Real Estate Agent — Your AI Command Center",
  description:
    "Close more deals. Know your market better. Work less. The AI command center built for Australian real estate agents.",
  keywords: [
    "real estate AI",
    "property listings",
    "real estate CRM",
    "AI command center",
    "Australian real estate",
    "property marketing",
  ],
  openGraph: {
    title: "007 Real Estate Agent — Your AI Command Center",
    description:
      "Close more deals. Know your market better. Work less.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
