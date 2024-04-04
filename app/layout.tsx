// layout is applied to all of the pages
// rtl and fa is defined for all pages
// global css is applied to all pages

import type { Metadata } from "next";
import { Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import MainNavBar from "@/layouts/MainNavBar";
import MainFooter from "@/layouts/MainFooter";
import { Analytics } from '@vercel/analytics/react';

const noto = Noto_Naskh_Arabic({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {

  title: {      // each page title replaces %s
    template: '%s | استودیو مثبت',
    default: 'استودیو مثبت',
  },

  keywords: ['موفقیت', 'سلامت روان', 'پیشرفت شغلی', 'پیشرفت تحصیلی'],
  description: 'سلامت روان و موفقیت شغلی تحصیلی',
  icons: {
    icon: '/favicon.ico', // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={noto.className}>
        <MainNavBar />
        {children}
        <MainFooter />
        <Analytics />
        </body>
    </html>
  );
}
