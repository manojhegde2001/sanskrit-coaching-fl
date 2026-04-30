'use client';

import { siteData } from '@/lib/mockData';
import SectionHeader from '@/components/ui/SectionHeader';
import { FaGraduationCap, FaLanguage, FaCertificate } from 'react-icons/fa';

export default function AboutTeacherSection() {
  const { sections } = siteData;
  const { about } = sections;

  return (
    <section id="about" className="section-padding bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-maroon-900/5 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/image.png"
                alt="Sanskrit Teacher"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -right-6 -bottom-6 bg-white p-6 rounded-[2rem] shadow-2xl border border-amber-100 text-center animate-fade-in">
              <p className="text-4xl font-bold text-maroon-900 leading-none">{about.experience}</p>
              <p className="text-[10px] text-saffron-600 font-bold uppercase tracking-widest mt-2">Teaching Exp.</p>
            </div>
          </div>

          {/* Content Column */}
          <div>
            <SectionHeader
              eyebrow="The Teacher"
              title="About the"
              highlight="Teacher"
              align="left"
            />
            
            <p className="text-lg text-maroon-700/80 leading-relaxed mb-8">
              {about.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-amber-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-maroon-900 flex items-center justify-center text-saffron-400">
                    <FaGraduationCap className="text-xl" />
                  </div>
                  <h4 className="heading-cinzel text-sm font-bold text-maroon-900">Qualifications</h4>
                </div>
                <ul className="space-y-2">
                  {about.qualifications.map((q, i) => (
                    <li key={i} className="text-xs text-maroon-700/70 font-medium flex items-start gap-2">
                      <FaCertificate className="text-saffron-500 mt-1 shrink-0" />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-amber-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-saffron-500 flex items-center justify-center text-white">
                    <FaLanguage className="text-xl" />
                  </div>
                  <h4 className="heading-cinzel text-sm font-bold text-maroon-900">Languages</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {about.languages.map((l, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-maroon-50 text-maroon-700 rounded-full border border-maroon-100">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
