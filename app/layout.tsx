import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';

export const metadata: Metadata = {
  title: {
    default: 'SanskritGuru — Personalized Sanskrit Coaching Online',
    template: '%s | SanskritGuru',
  },
  description:
    'Expert Sanskrit coaching for international students. One-on-one personalized learning and structured courses for Bhagavad Gita, Vedas, and Sanskrit grammar. Available worldwide via Zoom.',
  keywords: [
    'learn Sanskrit online',
    'Sanskrit coaching',
    'Bhagavad Gita course',
    'Sanskrit for NRIs',
    'personalized Sanskrit learning',
    'Sanskrit teacher',
    'online Sanskrit classes',
  ],
  openGraph: {
    title: 'SanskritGuru — Personalized Sanskrit Coaching Online',
    description: 'Expert Sanskrit coaching for international students. One-on-one personalized learning designed around your goals.',
    type: 'website',
  },
};

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
      </body>
    </html>
  );
}
