'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/sections/CTABanner';
import { siteData } from '@/lib/mockData';
import { FaWhatsapp, FaCheckCircle, FaClock, FaLaptop, FaRupeeSign, FaUserFriends, FaGraduationCap, FaOm } from 'react-icons/fa';

export default function CoursesPage() {
  const { sections, integrations } = siteData;
  const WA_LINK = `https://wa.me/${integrations.whatsapp.number}?text=${encodeURIComponent(integrations.whatsapp.defaultMessage)}`;

  return (
    <main className="bg-cream page-container min-h-screen">
      {/* Page Header */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            eyebrow="Our Offerings"
            title={sections.programs.title.split(' ')[0]}
            highlight={sections.programs.title.split(' ')[1]}
            subtitle="Personalized Sanskrit and Kannada coaching tailored to your needs. Choose from flexible 1:1 sessions or structured academic support."
            align="center"
          />
        </div>
      </section>

      {/* Categories Info */}
      <section className="pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: <FaUserFriends />, label: '1:1 Personalized', desc: 'Fully flexible, custom pace' },
            { icon: <FaGraduationCap />, label: 'Academic Support', desc: 'CBSE & State Board focus' },
            { icon: <FaOm />, label: 'Scriptures', desc: 'Shlokas & Vedic literature' },
          ].map((cat) => (
            <div key={cat.label} className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-amber-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-saffron-50 flex items-center justify-center text-saffron-600">
                {cat.icon}
              </div>
              <div>
                <p className="text-xs font-bold text-maroon-900">{cat.label}</p>
                <p className="text-[10px] text-maroon-600/50 uppercase font-bold tracking-wider">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Course Grid */}
      <section className="pb-20 bg-white rounded-t-[3rem] shadow-2xl relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.programs.list.map((program) => (
              <div
                key={program.id}
                className="group flex flex-col bg-cream rounded-[2rem] border border-amber-100 hover:border-amber-200 hover:shadow-2xl hover:shadow-saffron-500/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Icon Header */}
                <div className="bg-gradient-to-br from-saffron-50 to-amber-50 px-8 py-7 flex items-center justify-between border-b border-amber-100">
                  <span className="text-5xl transform group-hover:scale-110 transition-transform duration-500">
                    {program.id === 'shlokas' ? '🎼' : (program.id.includes('kannada') ? '📖' : '📜')}
                  </span>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-1 text-2xl font-bold text-maroon-900 heading-cinzel">
                      <span>₹{program.price.inr}</span>
                      <span className="text-maroon-300 mx-1">/</span>
                      <span className="text-saffron-600 text-xl">${program.price.usd}</span>
                    </div>
                    <p className="text-[10px] text-maroon-600/50 font-bold uppercase tracking-widest">per hour</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  {/* Category Badge */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                      program.type === 'academic'
                        ? 'bg-blue-100 text-blue-700'
                        : program.id === 'shlokas'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-emerald-100 text-emerald-700'
                    }`}>
                      {program.type === 'academic' ? 'Academic' : (program.id === 'shlokas' ? 'Scriptures' : 'Personalized')}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-maroon-50 text-maroon-700">
                      {program.id.includes('advanced') ? 'Advanced' : 'Beginner'}
                    </span>
                  </div>

                  <h2 className="heading-cinzel text-lg font-bold text-maroon-900 mb-3 leading-snug">
                    {program.name}
                  </h2>
                  <p className="text-sm text-maroon-700/65 leading-relaxed mb-5 min-h-[4.5rem]">
                    {program.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-[11px] text-maroon-600/55 font-semibold uppercase tracking-wide mt-auto mb-6 pt-4 border-t border-amber-100">
                    <span className="flex items-center gap-1.5">
                      <FaClock className="text-saffron-400" />
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaLaptop className="text-saffron-400" />
                      {program.mode}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaUserFriends className="text-saffron-400" />
                      {program.type === 'academic' ? 'Academic' : '1:1'}
                    </span>
                  </div>

                  <Button
                    href={`${WA_LINK}&course=${encodeURIComponent(program.name)}`}
                    variant="secondary"
                    fullWidth
                    className="rounded-xl py-4"
                  >
                    <FaWhatsapp className="text-base" />
                    Enquire on WhatsApp
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Summary */}
          <div className="mt-20 bg-maroon-900 rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 pattern-bg opacity-10" />
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-saffron-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="max-w-md text-center lg:text-left">
                  <h3 className="heading-cinzel text-3xl font-bold text-white mb-4">Fee Summary</h3>
                  <p className="text-amber-200/60 text-lg mb-6">
                    Transparent pricing for premium, personalized learning experiences.
                  </p>
                  <ul className="space-y-3 text-sm text-amber-100/80">
                    <li className="flex items-center gap-2 justify-center lg:justify-start">
                      <FaCheckCircle className="text-saffron-400" /> Free 15-minute demo session
                    </li>
                    <li className="flex items-center gap-2 justify-center lg:justify-start">
                      <FaCheckCircle className="text-saffron-400" /> One-on-one focused attention
                    </li>
                    <li className="flex items-center gap-2 justify-center lg:justify-start">
                      <FaCheckCircle className="text-saffron-400" /> Flexible scheduling
                    </li>
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full lg:w-auto">
                  {sections.programs.list.map((item) => (
                    <div key={item.id} className="bg-white/5 rounded-2xl p-5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                      <p className="heading-cinzel text-xl font-bold text-saffron-400">₹{item.price.inr} <span className="text-amber-200/30 text-base">/</span> ${item.price.usd}</p>
                      <p className="text-[10px] text-amber-200/50 font-bold uppercase tracking-wider mt-1">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-6">
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="rounded-2xl border-white/20 hover:bg-white/10 min-w-[200px]"
                >
                  Book Free Demo
                </Button>
                <Button
                  href={WA_LINK}
                  variant="primary"
                  size="lg"
                  className="rounded-2xl min-w-[200px]"
                >
                  <FaWhatsapp className="text-lg" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}

