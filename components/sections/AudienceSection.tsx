'use client';

import { siteData } from '@/lib/mockData';
import SectionHeader from '@/components/ui/SectionHeader';
import { FaCheckCircle } from 'react-icons/fa';

export default function AudienceSection() {
  const { sections } = siteData;
  const { audience } = sections;

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-saffron-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Target Audience"
          title={audience.title.split(' ').slice(0, 1).join(' ')}
          highlight={audience.title.split(' ').slice(1).join(' ')}
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
          {audience.items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-6 bg-cream rounded-2xl border border-amber-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-saffron-500 shadow-sm group-hover:bg-saffron-500 group-hover:text-white transition-colors">
                <FaCheckCircle className="text-xl" />
              </div>
              <span className="heading-cinzel text-base font-bold text-maroon-900">{item}</span>
            </div>
          ))}
        </div>
        
        <p className="text-center text-maroon-700/60 text-sm mt-10 italic">
          No prior knowledge of Sanskrit is required. We start from the basics.
        </p>
      </div>
    </section>
  );
}
