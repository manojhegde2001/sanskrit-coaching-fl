import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import ScrollToTop from '@/components/ui/ScrollToTop';

export const metadata: Metadata = {
  title: 'Sanatanadhara — Sanskrit & Kannada Classes Online',
  description:
    'Your child needs the best cultured education. Personalized one-on-one Sanskrit and Kannada coaching online — CBSE, State Board, Shlokas, Basic & Advanced Grammar. Grade 5–12 and Adults.',
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Sanatanadhara — Sanskrit & Kannada Classes Online',
    description: 'Your child needs the best cultured education. Personalized Sanskrit coaching by an M.A (Acharya), B.Ed qualified teacher with 5+ years of experience.',
    type: 'website',
    images: [{ url: '/image.png' }],
  },
  keywords: [
    'Sanskrit classes online',
    'Sanskrit coaching',
    'CBSE Sanskrit',
    'State Board Sanskrit',
    'Kannada classes',
    'Bhagavad Gita shlokas',
    'Sanskrit for beginners',
    'Sanskrit for adults',
    'personalized Sanskrit learning',
    'Sanskrit teacher online',
    'Sanatanadhara',
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
        <ScrollToTop />
      </body>
    </html>
  );
}
