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
    default: "RoSu Oy — Software Development from Finland",
    template: "%s | RoSu Oy",
  },
  description:
    "RoSu Oy is a Finnish software development company engineering modern digital solutions. Platform development, technical consulting, and product design.",
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
    title: "RoSu Oy — Software Development from Finland",
    description:
      "Finnish software development company building modern digital solutions and platforms.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoSu Oy — Software Development from Finland",
    description:
      "Finnish software development company building modern digital solutions and platforms.",
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
