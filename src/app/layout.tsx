import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GoHyperLocal | Quick Commerce & Express Delivery Platform for D2C Brands",
  description:
    "GoHyperLocal powers ultra-fast hyperlocal deliveries with real-time tracking, smart carrier switching, accurate ETAs, and a branded customer-facing delivery experience. Launch and scale your quick commerce operations today.",
  keywords: [
    "quick commerce",
    "hyperlocal delivery",
    "D2C logistics",
    "real-time tracking",
    "last mile delivery",
    "express delivery",
    "quick commerce platform",
    "delivery management",
    "carrier integration",
    "hyperlocal logistics",
    "GoHyperLocal",
    "dark store management",
    "branded tracking",
  ],
  openGraph: {
    title: "GoHyperLocal | Quick Commerce & Express Delivery Platform",
    description:
      "Real-time tracking, smart carrier switching, and accurate ETAs for ultra-fast hyperlocal deliveries — plus a beautiful customer-facing delivery experience.",
    url: "https://gohyperlocal.com",
    siteName: "GoHyperLocal",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoHyperLocal | Quick Commerce Platform for D2C Brands",
    description:
      "End-to-end logistics intelligence and customer delivery frontend for quick commerce.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://gohyperlocal.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
