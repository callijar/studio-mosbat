import type { Metadata } from "next";
import { Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import MainNavBar from "@/layouts/MainNavBar";
import MainFooter from "@/layouts/MainFooter";

const noto = Noto_Naskh_Arabic({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: 'استودیو مثبت',
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
    <html lang="fa">
      <body dir="rtl" className={noto.className}>
        <MainNavBar />
        {children}
        <MainFooter />
        </body>
    </html>
  );
}
