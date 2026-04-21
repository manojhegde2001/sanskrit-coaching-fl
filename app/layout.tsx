import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Sanatanadhara - Personalized Sanskrit Learning',
  description:
    'Your child needs the best cultured education. Personalized Sanskrit learning with Prasanna (Acharya, Sanskrit). Online coaching for CBSE, State Board, and more.',
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Sanatana Dhara — Personalized Sanskrit Coaching Online',
    description: 'One-on-one personalized Sanskrit learning designed around your goals. Your child needs the best cultured education.',
    type: 'website',
    images: [{ url: '/image.png' }],
  },
  keywords: [
    'learn Sanskrit online',
    'Sanskrit coaching',
    'Bhagavad Gita course',
    'Sanskrit for NRIs',
    'personalized Sanskrit learning',
    'Sanskrit teacher',
    'online Sanskrit classes',
  ],
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
