import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BunBeBe',
  description: 'Provides information about baby care facilities in Bundang.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="flex flex-col items-center h-screen">
        <main className="max-w-screen-sm w-screen">{children}</main>
      </body>
    </html>
  );
}
