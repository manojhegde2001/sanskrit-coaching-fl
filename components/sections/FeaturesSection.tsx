'use client';

import { siteData } from '@/lib/mockData';
import SectionHeader from '@/components/ui/SectionHeader';
import { FaCheckCircle } from 'react-icons/fa';

export default function FeaturesSection() {
  const { sections } = siteData;
  const { features } = sections;

  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Our Advantages"
          title={features.title.split(' ').slice(0, 1).join(' ')}
          highlight={features.title.split(' ').slice(1).join(' ')}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col p-8 bg-white rounded-[2rem] border border-amber-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-saffron-50 flex items-center justify-center text-saffron-500 mb-6">
                <FaCheckCircle className="text-2xl" />
              </div>
              <h3 className="heading-cinzel text-lg font-bold text-maroon-900 mb-3">{item.title}</h3>
              <p className="text-sm text-maroon-700/65 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
