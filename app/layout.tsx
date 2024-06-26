import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import { devil } from "@/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // metadataBase: new URL("https://acme.com"),
  title: `${devil}'s Portfolio | Full-stack developer`,
  description: `Full-stack Mastery Portfolio of ${devil}`,
  authors: [{ name: devil }],
  creator: devil,
  generator: "Next.js",
  publisher: devil,
  applicationName: "Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "react",
    "nextjs",
    "typescript",
    "web development",
    "portfolio",
    "full-stack",
    "freelancer",
    "figma",
    "framer",
    "webflow",
    "frontend",
    "frontend development",
    "backend",
    "backend development",
    "express",
    "mongoDB",
    "sql",
    devil,
  ],

  // alternates: {
  //   canonical: "/",
  //   languages: {
  //     "en-US": "/en-US",
  //     "ua-UA": "/ua-UA",
  //   },
  // },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.ico",
  },
  openGraph: {
    title: `${devil}'s Portfolio | Full-stack developer`,
    description: `Full-stack Mastery Portfolio of ${devil}`,
    images: "/og-image.png",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: `${devil}'s Portfolio | Full-stack developer`,
    description: `Full-stack Mastery Portfolio of ${devil}`,
    images: "/og-image.png",
  },
  category: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
