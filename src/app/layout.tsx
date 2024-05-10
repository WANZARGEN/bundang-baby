import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "분당 베이비",
  description: "분당 육아 시설 정보 제공",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
