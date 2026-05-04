import { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Have questions about our Sanskrit and Kannada classes? Contact Sanatanadhara today for a free demo session. Reach out via WhatsApp, phone, or email.',
  keywords: ['contact Sanskrit teacher', 'Sanskrit classes inquiry', 'book Sanskrit demo', 'Sanatanadhara contact'],
  alternates: {
    canonical: 'https://sanatanadhara.in/contact',
  },
};

export default function ContactPage() {
  // JSON-LD for LocalBusiness
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Sanatanadhara',
    'image': 'https://sanatanadhara.in/image.png',
    'url': 'https://sanatanadhara.in',
    'telephone': '+919482111881',
    'email': 'sanskritacademy01@gmail.com',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Online',
      'addressCountry': 'IN',
    },
    'description': 'Personalized one-on-one Sanskrit and Kannada coaching online.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactContent />
    </>
  );
}
