import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elchin Humbatov | Frontend & Mobile Developer",
  description:
    "Elchin Humbatov is a Frontend & Mobile Developer with 3+ years of experience building modern web and mobile apps using React, Next.js, and React Native. Open to freelance and relocation opportunities.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "React Native",
    "JavaScript Developer",
    "TypeScript Developer",
    "Mobile App Developer",
    "Web Developer Portfolio",
    "Azerbaijan Developer",
    "Remote Frontend Developer",
    "Freelance React Developer",
  ],
  authors: [{ name: "Elchin Humbatov", url: "https://elchinhumbatov.vercel.app" }],
  creator: "Elchin Humbatov",
  metadataBase: new URL("https://elchinhumbatov.vercel.app"),
  openGraph: {
    title: "Elchin Humbatov | Frontend & Mobile Developer",
    description:
      "Explore the portfolio of Elchin Humbatov, a skilled Frontend & Mobile Developer with real-world experience in modern web technologies.",
    url: "https://elchinhumbatov.vercel.app",
    siteName: "Elchin Humbatov Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="snap-y snap-mandatory">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Navbar />
          <main className="container mx-auto px-4">{children}</main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
