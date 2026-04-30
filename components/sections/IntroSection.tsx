'use client';

import { siteData } from '@/lib/mockData';
import SectionHeader from '@/components/ui/SectionHeader';

export default function IntroSection() {
  const { sections } = siteData;
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <SectionHeader
          eyebrow="Introduction"
          title={sections.intro.title.split(' ').slice(0, 2).join(' ')}
          highlight={sections.intro.title.split(' ').slice(2).join(' ')}
          align="center"
        />
        <p className="text-xl text-maroon-700/70 leading-relaxed mt-8">
          {sections.intro.content}
        </p>
      </div>
    </section>
  );
}
