import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import ScrollToTop from '@/components/ui/ScrollToTop';

export const metadata: Metadata = {
  metadataBase: new URL('https://sanatanadhara.in'),
  title: {
    default: 'Sanatanadhara | Learn Sanskrit with Clarity, Culture, and Confidence',
    template: '%s | Sanatanadhara',
  },
  description: 'Personalized one-on-one Sanskrit learning for school students and adults from basics to advanced grammar and shlokas. CBSE and State Board focused coaching.',
  keywords: [
    'Sanskrit classes online',
    'CBSE Sanskrit coaching',
    'State Board Sanskrit coaching',
    'Kannada classes online',
    'Bhagavad Gita shlokas',
    'Sanskrit for beginners',
    'Sanskrit for adults',
    'personalized Sanskrit learning',
    'Sanatanadhara',
    'Prasanna Hegde Sanskrit',
  ],
  authors: [{ name: 'Prasanna Hegde' }],
  creator: 'Prasanna Hegde',
  publisher: 'Sanatanadhara',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Sanatanadhara — Sanskrit & Kannada Classes Online',
    description: 'Personalized Sanskrit coaching by an M.A (Acharya), B.Ed qualified teacher with 5+ years of experience.',
    url: 'https://sanatanadhara.in',
    siteName: 'Sanatanadhara',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/image.png',
        width: 1200,
        height: 630,
        alt: 'Sanatanadhara — Sanskrit Learning',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanatanadhara — Sanskrit & Kannada Classes Online',
    description: 'Personalized Sanskrit coaching by an M.A (Acharya), B.Ed qualified teacher with 5+ years of experience.',
    images: ['/image.png'],
  },
  alternates: {
    canonical: 'https://sanatanadhara.in',
  },
};



import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main className="page-enter">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
