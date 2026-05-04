import { Metadata } from 'next';
import HowItWorksContent from './HowItWorksContent';
import { howItWorksSteps } from '@/lib/mockData';

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Learn about our simple 4-step process to start your Sanskrit learning journey. From booking a free demo to personalized one-on-one sessions.',
  keywords: ['Sanskrit learning process', 'online Sanskrit classes', 'how to learn Sanskrit', 'Sanskrit demo session'],
  alternates: {
    canonical: 'https://sanatanadhara.in/how-it-works',
  },
};

export default function HowItWorksPage() {
  // JSON-LD for HowTo
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'How to start learning Sanskrit with Sanatanadhara',
    'description': 'Follow these 4 simple steps to begin your personalized Sanskrit coaching.',
    'step': howItWorksSteps.map((step, index) => ({
      '@type': 'HowToStep',
      'position': index + 1,
      'name': step.title,
      'text': step.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HowItWorksContent />
    </>
  );
}
