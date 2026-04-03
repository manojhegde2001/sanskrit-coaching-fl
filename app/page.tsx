import Hero from '@/components/sections/Hero';
import WhyLearnSanskrit from '@/components/sections/WhyLearnSanskrit';
import PersonalizedHighlight from '@/components/sections/PersonalizedHighlight';
import CoursesPreview from '@/components/sections/CoursesPreview';
import Testimonials from '@/components/sections/Testimonials';
import CTABanner from '@/components/sections/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyLearnSanskrit />
      <PersonalizedHighlight />
      <CoursesPreview />
      <Testimonials />
      <CTABanner />
    </>
  );
}
