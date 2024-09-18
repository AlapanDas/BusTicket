import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from "next/script";
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
      <meta name="google-adsense-account" content="ca-pub-9008211620540519"></meta>
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-EN83E8Y78K"></Script>
        <Script
          id="BUS"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}  gtag('js', new Date());  gtag('config', 'G-EN83E8Y78K');` }}></Script>
      </head>
      <GoogleTagManager gtmId="GTM-MX2D6KCS" />
      <body className={inter.className}>
        <GoogleAnalytics gaId="G-RGL7SZBRLC" />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html >
  );
}
