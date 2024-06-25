import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import { devil } from "@/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${devil}'s Portfolio | Full-stack developer`,
  description: "Full-stack Mastery Portfolio",
  generator: "Next.js",
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
  authors: [{ name: devil }],
  creator: devil,
  openGraph: {
    images: "/og-image.png",
    title: `${devil}'s Portfolio | Full-stack developer`,
    description: "Full-stack Mastery Portfolio",
  },
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
  category: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.PNG" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
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
