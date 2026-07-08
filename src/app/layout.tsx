import type { Metadata } from "next";
import { Noto_Sans_KR, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EGDesk AI Server 호스팅 - QUUS CO., LTD",
  description: "세계 최초 개인용 AI 데이터센터 - EGDesk AI Platform 호스팅 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSansKr.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#08134a] text-white font-sans selection:bg-blue-650 selection:text-white overflow-x-hidden">
        <Header />
        <main className="flex-grow relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
