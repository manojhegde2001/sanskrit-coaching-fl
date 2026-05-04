import { Metadata } from 'next';
import OneOnOneContent from './OneOnOneContent';

export const metadata: Metadata = {
  title: 'One-on-One Personalized Sanskrit Learning',
  description: 'Experience the most effective way to learn Sanskrit with 1:1 personalized coaching. Tailored curriculum, flexible timing, and direct mentorship.',
  keywords: ['personalized Sanskrit learning', '1:1 Sanskrit classes', 'online Sanskrit tutor', 'private Sanskrit lessons'],
  alternates: {
    canonical: 'https://sanatanadhara.in/one-on-one',
  },
};

export default function OneOnOnePage() {
  // JSON-LD for Service
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'One-on-One Personalized Sanskrit Learning',
    'description': 'A completely personalized Sanskrit learning journey designed exclusively around your goals, pace, and schedule.',
    'provider': {
      '@type': 'Person',
      'name': 'Prasanna Hegde',
    },
    'areaServed': 'Worldwide',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Sanskrit Coaching',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': '1:1 Live Sanskrit Sessions',
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OneOnOneContent />
    </>
  );
}
