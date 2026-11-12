import type { Metadata } from "next";
import { Fraunces, Inter, Caveat } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anns Qasim | Senior Full-Stack Engineer, Munich",
  description:
    "Senior Full-Stack Engineer and Tech Lead in Munich. Twelve years of JavaScript, now building a luxury stays platform at WeStay. React, Next.js, TypeScript and AI-first delivery.",
  openGraph: {
    title: "Anns Qasim | Senior Full-Stack Engineer, Munich",
    description:
      "Twelve years of JavaScript. Building a luxury stays platform at WeStay. React, Next.js, TypeScript and AI-first delivery.",
    url: "https://annsqasim.vercel.app",
    siteName: "Anns Qasim",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
