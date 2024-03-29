import type { Metadata } from "next";
import { Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";

const noto = Noto_Naskh_Arabic({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: "استودیو مثبت",
  description: "سلامت روان و موفقیت شغلی تحصیلی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body dir="rtl" className={noto.className}>{children}</body>
    </html>
  );
}
