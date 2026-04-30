import Hero from '@/components/sections/Hero';
import IntroSection from '@/components/sections/IntroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import AboutTeacherSection from '@/components/sections/AboutTeacherSection';
import CoursesPreview from '@/components/sections/CoursesPreview';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import AudienceSection from '@/components/sections/AudienceSection';
import Testimonials from '@/components/sections/Testimonials';
import CTABanner from '@/components/sections/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <FeaturesSection />
      <AboutTeacherSection />
      <CoursesPreview />
      <HowItWorksSection />
      <AudienceSection />
      <Testimonials />
      <CTABanner />
    </>
  );
}

