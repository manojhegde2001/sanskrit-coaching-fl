import { Metadata } from 'next';
import CoursesContent from './CoursesContent';
import { siteData } from '@/lib/mockData';

export const metadata: Metadata = {
  title: 'Sanskrit & Kannada Courses',
  description: 'Explore our range of personalized Sanskrit and Kannada courses. From school syllabus (CBSE/State) to Bhagavad Gita shlokas and advanced grammar.',
  keywords: ['Sanskrit courses', 'Kannada courses', 'CBSE Sanskrit', 'Vedic Shlokas', 'Sanskrit grammar'],
  alternates: {
    canonical: 'https://sanatanadhara.in/courses',
  },
};

export default function CoursesPage() {
  const { sections } = siteData;

  // JSON-LD for Courses
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': sections.programs.list.map((program, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Course',
        'name': program.name,
        'description': program.description,
        'provider': {
          '@type': 'Organization',
          'name': 'Sanatanadhara',
          'sameAs': 'https://sanatanadhara.in',
        },
        'offers': {
          '@type': 'Offer',
          'price': program.price.inr,
          'priceCurrency': 'INR',
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CoursesContent />
    </>
  );
}
