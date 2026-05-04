import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sanatanadhara — Sanskrit & Kannada Classes',
    short_name: 'Sanatanadhara',
    description: 'Personalized one-on-one Sanskrit learning for school students and adults.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFAF3',
    theme_color: '#800000',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
