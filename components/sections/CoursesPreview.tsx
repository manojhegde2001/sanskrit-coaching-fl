'use client';

import { siteData } from '@/lib/mockData';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaWhatsapp, FaCheckCircle, FaClock, FaRupeeSign } from 'react-icons/fa';

export default function CoursesPreview() {
  const { sections, integrations } = siteData;
  const WA_LINK = `https://wa.me/${integrations.whatsapp.number}?text=${encodeURIComponent(integrations.whatsapp.defaultMessage)}`;
  const preview = sections.programs.list.slice(0, 3);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-96 h-96 bg-maroon-900/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <SectionHeader
              eyebrow="Our Offerings"
              title={sections.programs.title.split(' ')[0]}
              highlight={sections.programs.title.split(' ')[1]}
              subtitle="Flexible one-on-one online sessions for school students and adults — beginners to advanced."
              align="left"
            />
          </div>
          <div className="shrink-0">
            <Button variant="secondary" href="/courses" size="lg" className="rounded-2xl">
              View All {sections.programs.list.length} Programs <FaArrowRight className="text-xs ml-1" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {preview.map((program) => (
            <div
              key={program.id}
              className="group flex flex-col bg-cream rounded-[2rem] border border-amber-100 hover:shadow-2xl hover:shadow-saffron-500/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Header with icon + price */}
              <div className="bg-gradient-to-br from-saffron-50 to-amber-50 px-7 py-6 flex items-center justify-between border-b border-amber-100">
                <span className="text-4xl">
                  {program.id === 'shlokas' ? '🎼' : (program.id.includes('kannada') ? '📖' : '📜')}
                </span>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-0.5 heading-cinzel text-xl font-bold text-maroon-900">
                    <FaRupeeSign className="text-sm text-saffron-600" />
                    <span>{program.price}</span>
                  </div>
                  <p className="text-[9px] text-maroon-600/50 font-bold uppercase tracking-widest">/hour</p>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                    program.type === 'academic'
                      ? 'bg-blue-100 text-blue-700'
                      : program.id === 'shlokas'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {program.type === 'academic' ? 'Academic' : (program.id === 'shlokas' ? 'Scriptures' : 'Personalized')}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-maroon-50 text-maroon-700">
                    {program.id.includes('advanced') ? 'Advanced' : 'Beginner'}
                  </span>
                </div>

                <h3 className="heading-cinzel text-base font-bold text-maroon-900 mb-2 leading-snug">
                  {program.name}
                </h3>
                <p className="text-xs text-maroon-700/60 leading-relaxed mb-4">
                  {program.description}
                </p>

                <div className="flex items-center gap-2 text-[10px] text-maroon-600/50 font-semibold uppercase tracking-wide mt-auto mb-4 pt-3 border-t border-amber-100">
                  <FaClock className="text-saffron-400" />
                  {program.duration} · {program.mode}
                </div>

                <Button
                  href={WA_LINK}
                  variant="secondary"
                  fullWidth
                  className="rounded-xl text-xs"
                >
                  <FaWhatsapp className="text-sm" />
                  Enquire on WhatsApp
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* "See all" nudge */}
        <div className="mt-10 text-center p-6 bg-cream rounded-3xl border border-dashed border-amber-200">
          <p className="text-sm text-maroon-700/60 mb-4">
            Also offering: <strong className="text-maroon-900">CBSE Sanskrit · State Board Sanskrit · CBSE Kannada</strong>
          </p>
          <Button href="/courses" variant="ghost" className="rounded-xl text-saffron-600 hover:bg-saffron-50">
            View All Programs & Fees <FaArrowRight className="text-xs ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}

