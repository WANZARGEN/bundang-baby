import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BunBeBe",
  description: "Provides information about baby care facilities in Bundang.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
