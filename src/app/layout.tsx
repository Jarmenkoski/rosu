import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rosu.fi"),
  title: {
    default: "RoSu Oy — Software That Makes Everyday Life Easier",
    template: "%s | RoSu Oy",
  },
  description:
    "RoSu Oy is a Finnish software company building digital products that make everyday life easier and better.",
  keywords: [
    "RoSu Oy",
    "software development",
    "Finland",
    "web development",
    "platform development",
    "technical consulting",
    "Ask4Help",
    "Finnish software company",
  ],
  authors: [{ name: "RoSu Oy" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rosu.fi",
    siteName: "RoSu Oy",
    title: "RoSu Oy — Software That Makes Everyday Life Easier",
    description:
      "Finnish software company building digital products that make everyday life easier and better.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoSu Oy — Software That Makes Everyday Life Easier",
    description:
      "Finnish software company building digital products that make everyday life easier and better.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
