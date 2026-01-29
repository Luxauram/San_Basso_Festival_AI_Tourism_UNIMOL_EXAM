import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'San Basso Festival',
  description: 'Un sito della Termoli Events per il San Basso Festival',
  openGraph: {
    title: 'San Basso Festival',
    description: 'Un sito della Termoli Events per il San Basso Festival',
    url: 'https://san-basso-festival.vercel.app',
    siteName: 'San Basso Festival',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'San Basso Festival',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'San Basso Festival',
    description: 'Un sito della Termoli Events per il San Basso Festival',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
