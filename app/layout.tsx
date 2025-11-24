import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "StrikeMedia.Co",
  description: "Viral-ready content for artists, creators & labels.",
  icons: {
    icon: "/favicon_128x128.png",
    shortcut: "/favicon_128x128.png",
    apple: "/favicon_128x128.png",
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
