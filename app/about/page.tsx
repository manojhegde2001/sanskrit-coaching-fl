import { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Prasanna Hegde',
  description: 'Learn about Prasanna Hegde, an M.A (Acharya), B.Ed qualified Sanskrit teacher with 5+ years of experience. Discover our teaching philosophy and passion for Sanskrit.',
  keywords: ['Sanskrit teacher', 'Prasanna Hegde', 'Acharya Sanskrit', 'Sanskrit coaching India', 'online Sanskrit tutor'],
  alternates: {
    canonical: 'https://sanatanadhara.in/about',
  },
};

export default function AboutPage() {
  // JSON-LD for Person (Instructor)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'Prasanna Hegde',
    'url': 'https://sanatanadhara.in/about',
    'image': 'https://sanatanadhara.in/image.png',
    'jobTitle': 'Sanskrit Teacher',
    'description': 'M.A (Acharya), B.Ed qualified Sanskrit teacher with 5+ years of experience.',
    'affiliation': {
      '@type': 'Organization',
      'name': 'Sanatanadhara',
    },
    'knowsAbout': ['Sanskrit Grammar', 'Vedic Literature', 'Bhagavad Gita', 'Kannada Language'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutContent />
    </>
  );
}
