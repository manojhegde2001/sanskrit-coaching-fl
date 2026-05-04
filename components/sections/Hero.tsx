'use client';

import Button from '@/components/ui/Button';
import { FaCheckCircle, FaWhatsapp, FaSun } from 'react-icons/fa';
import { siteData } from '@/lib/mockData';

export default function Hero() {
  const { site, hero, sections, integrations } = siteData;
  const WA_LINK = `https://wa.me/${integrations.whatsapp.number}?text=${encodeURIComponent(integrations.whatsapp.defaultMessage)}`;

  return (
    <>
      {/* ─── MOBILE HERO (IMPROVISED) ─── */}
      <section className="relative bg-cream overflow-hidden lg:hidden pt-28 pb-16">
        {/* Background elements */}
        <div className="absolute inset-0 pattern-bg opacity-30" />
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-saffron-100/50 to-transparent" />
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-saffron-200/20 blur-2xl" />
        <div className="absolute top-40 -left-10 w-32 h-32 rounded-full bg-amber-200/20 blur-2xl" />

        <div className="relative z-10 w-full px-6 flex flex-col">
          
          {/* Expert Badge + Avatar (Improvised) */}
          <div className="flex items-center gap-4 mb-8">
            <div className="relative w-16 h-16 rounded-full border-2 border-saffron-200 p-1 bg-white shadow-md">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="/avatar.png" 
                  alt="Teacher Avatar" 
                  className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]" 
                />

              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded-md bg-saffron-100 text-saffron-700 text-[9px] font-bold uppercase tracking-wider">
                 Prasanna Hegde
                </span>
              </div>
              <span className="heading-cinzel text-sm font-bold text-maroon-900 leading-tight">
                M.A (Acharya), B.Ed
              </span>
              <span className="text-[10px] font-medium text-maroon-700/60 uppercase tracking-[0.1em]">
                {sections.about.experience} Experience
              </span>
            </div>
          </div>


          {/* Heading */}
          <div role="heading" aria-level={1} className="heading-cinzel text-[2.75rem] font-bold text-maroon-900 leading-[1.05] mb-6 tracking-tight">
            {hero.title.split('with')[0]}
            <span className="block mt-1 bg-saffron-gradient bg-clip-text text-transparent">
              with {hero.title.split('with')[1]}
            </span>
          </div>

          {/* Subtext */}
          <p className="text-base text-maroon-700/70 leading-relaxed mb-10">
            {hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 w-full mb-12">
            <Button
              variant="primary"
              size="lg"
              href={hero.ctaPrimary.type === 'whatsapp' ? WA_LINK : '/contact'}
              className="w-full rounded-2xl justify-center shadow-xl shadow-saffron-500/30 py-5 text-base font-bold"
            >
              {hero.ctaPrimary.type === 'whatsapp' && <FaWhatsapp className="text-xl" />}
              {hero.ctaPrimary.label}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={hero.ctaSecondary.type === 'whatsapp' ? WA_LINK : '/contact'}
              className="w-full rounded-2xl justify-center py-5 text-base font-bold bg-white/60 backdrop-blur-md"
            >
              {hero.ctaSecondary.type === 'whatsapp' && <FaWhatsapp className="text-xl" />}
              {hero.ctaSecondary.label}
            </Button>
          </div>

          {/* Feature Highlights - Compact Row */}
          <div className="grid grid-cols-2 gap-3">
            {sections.features.items.slice(0, 4).map((item, i) => (
              <div 
                key={i} 
                className="bg-white/40 backdrop-blur-sm p-4 rounded-2xl border border-amber-100/50 flex flex-col gap-2"
              >
                <FaCheckCircle className="text-saffron-500 text-sm" />
                <span className="text-[11px] font-bold text-maroon-900 leading-tight">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* Trust indicator */}
          <div className="mt-10 pt-8 border-t border-amber-100/50 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-maroon-900">1:1 Live</span>
              <span className="text-[10px] text-maroon-600/60 uppercase font-bold tracking-widest">Online Sessions</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xl font-bold text-saffron-600">All Ages</span>
              <span className="text-[10px] text-maroon-600/60 uppercase font-bold tracking-widest">Beginner to Adv.</span>
            </div>
          </div>
        </div>
      </section>


      {/* ─── DESKTOP HERO ─── */}
      <section className="relative min-h-screen hidden lg:flex items-center overflow-hidden bg-cream">
        {/* Background */}
        <div className="absolute inset-0 pattern-bg opacity-60" />
        <div className="absolute top-20 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-saffron-100/60 to-transparent -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-gold-100/40 to-transparent translate-y-1/4 -translate-x-1/4" />
        <span className="om-watermark text-maroon-900 right-10 top-1/2 -translate-y-1/2 text-[25rem] select-none pointer-events-none">ॐ</span>

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 py-32 w-full">
          <div className="grid grid-cols-12 gap-12 items-start">

            {/* Content */}
            <div className="col-span-7">
              {/* Brand label removed as per user request */}

              <h1 className="heading-cinzel text-5xl lg:text-7xl font-bold text-maroon-900 leading-[1.1] mb-8 animate-fade-up">
                {hero.title.split(',')[0]}<br />
                <span className="gradient-text">{hero.title.split(',').slice(1).join(',')}</span>
              </h1>

              <p className="text-xl text-maroon-700/70 leading-relaxed mb-12 max-w-xl animate-fade-up">
                {hero.subtitle}
              </p>

              <div className="flex gap-5 mb-14 animate-fade-up">
                <Button
                  variant="primary"
                  size="lg"
                  href={hero.ctaPrimary.type === 'whatsapp' ? WA_LINK : '/contact'}
                  className="rounded-2xl shadow-2xl shadow-saffron-500/30 px-10 py-5 text-lg"
                >
                  {hero.ctaPrimary.type === 'whatsapp' && <FaWhatsapp className="text-2xl" />}
                  {hero.ctaPrimary.label}
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href={hero.ctaSecondary.type === 'whatsapp' ? WA_LINK : '/contact'}
                  className="rounded-2xl px-10 py-5 text-lg"
                >
                  {hero.ctaSecondary.type === 'whatsapp' && <FaWhatsapp className="text-2xl" />}
                  {hero.ctaSecondary.label}
                </Button>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white/60 backdrop-blur-sm rounded-[2.5rem] border border-amber-100 p-8 shadow-sm animate-fade-in max-w-2xl">
                <p className="text-[10px] font-bold text-maroon-600/60 uppercase tracking-widest mb-5">
                  {sections.features.title}
                </p>
                <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                  {sections.features.items.map((item) => (
                    <li key={item.title} className="flex items-start gap-3 text-sm text-maroon-800 font-bold leading-tight">
                      <FaCheckCircle className="text-saffron-500 shrink-0 mt-0.5" />
                      <span>
                        <strong className="block">{item.title}</strong>
                        <span className="text-xs text-maroon-700/60 font-normal">{item.description}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Instructor Image */}
            <div className="col-span-5 relative group">
              <div className="absolute -inset-6 bg-maroon-900/5 rounded-[5rem] rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-700" />
              <div className="absolute inset-0 bg-saffron-gradient opacity-10 rounded-[5rem] -rotate-3 scale-105" />
              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-[6px] border-white animate-fade-in">
                <img
                  src="/image.png"
                  alt="Sanskrit Instructor at Sanatanadhara"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -right-4 bottom-16 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-amber-100 animate-fade-up transform hover:scale-110 transition-transform duration-500">
                <div className="text-center">
                  <p className="text-4xl font-bold text-maroon-900 leading-none">{sections.about.experience}</p>
                  <p className="text-[10px] text-saffron-600 font-bold uppercase tracking-widest mt-2">Years Exp.</p>
                </div>
              </div>
              
              <div className="absolute -left-6 top-[65%] bg-white p-5 rounded-3xl shadow-2xl border border-amber-100 animate-fade-up delay-200 transform hover:-rotate-6 transition-transform">
                <div className="text-center">
                  <p className="heading-cinzel text-base font-bold text-maroon-900">{sections.about.qualifications[0]}</p>
                  <p className="text-[9px] text-saffron-600 uppercase tracking-widest font-bold mt-1">{sections.about.qualifications[1]}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[10px] text-maroon-600 tracking-[0.5em] uppercase font-bold">Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-saffron-500 to-transparent" />
        </div>
      </section>
    </>
  );
}

