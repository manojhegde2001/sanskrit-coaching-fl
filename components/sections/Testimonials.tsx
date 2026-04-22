'use client';
import { testimonials } from '@/lib/mockData';
import SectionHeader from '@/components/ui/SectionHeader';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

export default function Testimonials() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 pattern-bg opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Success Stories"
          title="Student"
          highlight="Feedback"
          subtitle="What our students and parents say about their learning experience with Sanatanadhara."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col bg-cream rounded-[2.5rem] p-8 md:p-10 border border-amber-100 shadow-sm hover:shadow-2xl transition-all duration-500 group relative"
            >
              <div className="absolute top-8 right-8 text-saffron-100 group-hover:text-saffron-200 transition-colors">
                <FaQuoteLeft className="text-4xl" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} className="text-saffron-500 text-sm" />
                ))}
              </div>

              {/* Text */}
              <p className="text-maroon-700/80 italic leading-relaxed mb-8 relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Profile */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-white shadow-md">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="heading-cinzel text-sm font-bold text-maroon-900">{t.name}</h4>
                  <p className="text-[10px] text-saffron-600 font-bold uppercase tracking-widest">{t.location}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-amber-100/50">
                <p className="text-[9px] text-maroon-600/40 font-bold uppercase tracking-widest">
                  Class: {t.course}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
