import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from '@next/third-parties/google'
import {GoogleTagManager} from '@next/third-parties/google'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyBusTicket",
  description: "MyBusTicket: Your Kolkata Bus Guru",
  icons: [
    {
      url: "/icon.svg"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <GoogleTagManager gtmId="GTM-MX2D6KCS" />
      <body className={inter.className}>
        <GoogleAnalytics gaId="G-RGL7SZBRLC" />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
