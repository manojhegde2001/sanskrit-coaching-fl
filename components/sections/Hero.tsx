'use client';

import Button from '@/components/ui/Button';
import { FaCheckCircle, FaWhatsapp, FaSun } from 'react-icons/fa';

const WA_LINK =
  'https://wa.me/919482111881?text=Hello%2C%20I%27m%20interested%20in%20Sanskrit%20classes.%20I%20would%20like%20to%20book%20a%20free%20demo%20session.';

const highlights = [
  'One-on-One Personalized Learning',
  'Flexible Timings & Custom Pace',
  'Learn in English / Sanskrit / Telugu / Kannada',
  'M.A (Acharya) & B.Ed Qualified Instructor',
  'Academic Support (CBSE / State Board)',
];

export default function Hero() {
  return (
    <>
      {/* ─── MOBILE HERO ─── */}
      <section className="relative bg-cream overflow-hidden lg:hidden">
        <div className="absolute inset-0 pattern-bg opacity-30" />
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-saffron-100/40" />
        <div className="absolute bottom-0 -left-10 w-40 h-40 rounded-full bg-amber-100/30" />

        <div className="relative z-10 w-full px-5 pt-24 pb-12 flex flex-col">

          {/* Brand name */}
          <span className="inline-flex flex-col self-start mb-6">
            <span className="heading-cinzel text-xl font-bold text-maroon-900 tracking-tight leading-tight flex items-center gap-2">
              <FaSun className="text-saffron-500 text-sm" />
              Sanatanadhara
            </span>
            <span className="text-[10px] font-bold text-saffron-600 tracking-[0.2em] uppercase mt-1">
              सनातनधारा / ಸನಾತನಧಾರ
            </span>
          </span>

          {/* Heading */}
          <h1 className="heading-cinzel text-4xl font-bold text-maroon-900 leading-[1.1] mb-4">
            Classical Wisdom,{' '}
            <span className="gradient-text">Personalized for You</span>
          </h1>

          {/* Subtext */}
          <p className="text-sm text-maroon-700/65 leading-relaxed mb-8 max-w-xs">
            Master Sanskrit and Kannada through flexible, one-on-one sessions tailored to your goals, age, and background.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3 w-full mb-10">
            <Button
              variant="primary"
              size="lg"
              href={WA_LINK}
              className="w-full rounded-2xl justify-center shadow-xl shadow-saffron-500/20 py-4"
            >
              <FaWhatsapp className="text-xl" />
              Chat on WhatsApp
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/contact"
              className="w-full rounded-2xl justify-center py-4"
            >
              Start Free Demo Session
            </Button>
          </div>

          {/* Why Choose Us — mobile */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-amber-100 p-6 shadow-sm">
            <p className="text-[10px] font-bold text-maroon-600/60 uppercase tracking-widest mb-4">
              Why Sanatanadhara?
            </p>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-maroon-800 font-medium leading-tight">
                  <FaCheckCircle className="text-saffron-500 mt-0.5 shrink-0 text-xs" />
                  {item}
                </li>
              ))}
            </ul>
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

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 pt-32 pb-24 w-full">
          <div className="grid grid-cols-12 gap-12 items-center">

            {/* Content */}
            <div className="col-span-7">
              {/* Brand label */}
              <div className="flex flex-col mb-8 animate-fade-in">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 rounded-xl bg-maroon-900 flex items-center justify-center text-saffron-400 shadow-lg">
                    <FaSun className="text-xl" />
                  </div>
                  <span className="heading-cinzel text-3xl font-bold text-maroon-900 tracking-tight leading-tight">
                    Sanatanadhara
                  </span>
                </div>
                <span className="text-base font-bold text-saffron-600 tracking-[0.3em] mt-1 ml-1">
                  सनातनधारा / ಸನಾತನಧಾರ
                </span>
              </div>

              <h1 className="heading-cinzel text-5xl lg:text-7xl font-bold text-maroon-900 leading-[1.1] mb-8 animate-fade-up">
                Classical Wisdom,<br />
                <span className="gradient-text">Personalized for You</span>
              </h1>

              <p className="text-xl text-maroon-700/70 leading-relaxed mb-12 max-w-xl animate-fade-up">
                Master Sanskrit and Kannada through flexible, one-on-one sessions tailored to your pace, academic needs, and spiritual goals.
              </p>

              <div className="flex gap-5 mb-14 animate-fade-up">
                <Button
                  variant="primary"
                  size="lg"
                  href="/contact"
                  className="rounded-2xl shadow-2xl shadow-saffron-500/30 px-10 py-5 text-lg"
                >
                  Start Free Demo Session
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href={WA_LINK}
                  className="rounded-2xl px-10 py-5 text-lg"
                >
                  <FaWhatsapp className="text-2xl" />
                  Chat on WhatsApp
                </Button>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white/60 backdrop-blur-sm rounded-[2.5rem] border border-amber-100 p-8 shadow-sm animate-fade-in inline-block">
                <p className="text-[10px] font-bold text-maroon-600/60 uppercase tracking-widest mb-5">
                  Why Sanatanadhara?
                </p>
                <ul className="grid grid-cols-2 gap-x-10 gap-y-4">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-maroon-800 font-bold whitespace-nowrap">
                      <FaCheckCircle className="text-saffron-500 shrink-0" />
                      {item}
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
              <div className="absolute -right-8 bottom-16 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-amber-100 animate-fade-up transform hover:scale-110 transition-transform duration-500">
                <div className="text-center">
                  <p className="text-4xl font-bold text-maroon-900 leading-none">5+</p>
                  <p className="text-[10px] text-saffron-600 font-bold uppercase tracking-widest mt-2">Years Exp.</p>
                </div>
              </div>
              
              <div className="absolute -left-10 top-1/4 bg-white p-5 rounded-3xl shadow-2xl border border-amber-100 animate-fade-up delay-200 transform hover:-rotate-6 transition-transform">
                <div className="text-center">
                  <p className="heading-cinzel text-base font-bold text-maroon-900">M.A (Acharya)</p>
                  <p className="text-[9px] text-saffron-600 uppercase tracking-widest font-bold mt-1">B.Ed · Sanskrit</p>
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
