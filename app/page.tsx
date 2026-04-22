import Hero from '@/components/sections/Hero';
import CoursesPreview from '@/components/sections/CoursesPreview';
import CTABanner from '@/components/sections/CTABanner';
import HowItWorksSection from '@/components/sections/HowItWorksSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CoursesPreview />
      <HowItWorksSection />
      <CTABanner />
    </>
  );
}
