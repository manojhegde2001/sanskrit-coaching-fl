'use client';

import Button from '@/components/ui/Button';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';

const WA_LINK =
  'https://wa.me/919482111881?text=Hello%2C%20I%27m%20interested%20in%20Sanskrit%20classes.%20I%20would%20like%20to%20book%20a%20free%20demo%20session.';

const highlights = [
  'One-on-One Personalized Learning',
  'Flexible Timings',
  'Learn in English / Sanskrit / Telugu / Kannada',
  '5+ Years Teaching Experience',
  'Suitable for Beginners to Advanced Learners',
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
          <span className="inline-flex flex-col self-start mb-5">
            <span className="heading-cinzel text-lg font-bold text-maroon-900 tracking-tight leading-tight">
              Sanatanadhara
            </span>
            <span className="text-xs font-semibold text-saffron-600 tracking-widest">
              सनातनधारा / ಸನಾತನಧಾರ
            </span>
          </span>

          {/* Heading */}
          <h1 className="heading-cinzel text-3xl font-bold text-maroon-900 leading-tight mb-3">
            Personalized Sanskrit Learning,{' '}
            <span className="gradient-text">Designed for You</span>
          </h1>

          {/* Subtext */}
          <p className="text-sm text-maroon-700/65 leading-relaxed mb-6 max-w-xs">
            Learn Sanskrit through flexible, one-on-one sessions tailored to your pace, goals, and background.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-2.5 w-full mb-8">
            <Button
              variant="primary"
              size="lg"
              href={WA_LINK}
              className="w-full rounded-xl justify-center shadow-md shadow-saffron-500/20"
            >
              <FaWhatsapp className="text-lg" />
              Chat on WhatsApp
            </Button>
            <Button
              variant="secondary"
              size="md"
              href="/contact"
              className="w-full rounded-xl justify-center"
            >
              Start Your Free Demo
            </Button>
          </div>

          {/* Why Choose Us — mobile */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-amber-100 p-5 shadow-sm">
            <p className="text-[10px] font-bold text-maroon-600/60 uppercase tracking-widest mb-3">
              Why Choose Us
            </p>
            <ul className="space-y-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-maroon-800 font-medium">
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
          <div className="grid grid-cols-12 gap-8 items-center">

            {/* Content */}
            <div className="col-span-7">
              {/* Brand label */}
              <div className="flex flex-col mb-6 animate-fade-in">
                <span className="heading-cinzel text-3xl font-bold text-maroon-900 tracking-tight leading-tight">
                  Sanatanadhara
                </span>
                <span className="text-base font-semibold text-saffron-600 tracking-widest mt-0.5">
                  सनातनधारा / ಸನಾತನಧಾರ
                </span>
              </div>

              <h1 className="heading-cinzel text-5xl lg:text-6xl font-bold text-maroon-900 leading-[1.1] mb-6 animate-fade-up">
                Personalized Sanskrit Learning,{' '}
                <span className="gradient-text">Designed for You</span>
              </h1>

              <p className="text-xl text-maroon-700/70 leading-relaxed mb-10 max-w-xl animate-fade-up">
                Learn Sanskrit through flexible, one-on-one sessions tailored to your pace, goals, and background.
              </p>

              <div className="flex gap-4 mb-12 animate-fade-up">
                <Button
                  variant="primary"
                  size="lg"
                  href="/contact"
                  className="rounded-2xl shadow-xl shadow-saffron-500/20"
                >
                  Start Your Free Demo
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href={WA_LINK}
                  className="rounded-2xl"
                >
                  <FaWhatsapp className="text-lg" />
                  Chat on WhatsApp
                </Button>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-amber-100 p-6 shadow-sm animate-fade-in">
                <p className="text-[10px] font-bold text-maroon-600/60 uppercase tracking-widest mb-4">
                  Why Choose Us
                </p>
                <ul className="grid grid-cols-1 gap-2.5">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-maroon-800 font-medium">
                      <FaCheckCircle className="text-saffron-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Instructor Image */}
            <div className="col-span-5 relative group">
              <div className="absolute -inset-4 bg-maroon-900/5 rounded-[4rem] rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-700" />
              <div className="absolute inset-0 bg-saffron-gradient opacity-10 rounded-[4rem] -rotate-3 scale-105" />
              <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white animate-fade-in">
                <img
                  src="/image.png"
                  alt="Prasanna - Sanskrit Instructor at Sanatanadhara"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute -right-6 bottom-12 bg-white p-6 rounded-3xl shadow-2xl border border-amber-100 animate-fade-up transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <p className="text-4xl font-bold text-maroon-900 leading-none">5+</p>
                  <p className="text-[10px] text-saffron-600 font-bold uppercase tracking-widest mt-1">Years Teaching</p>
                </div>
              </div>
              <div className="absolute -left-6 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-amber-100 animate-fade-up delay-200 transform hover:rotate-3 transition-transform">
                <div className="text-center">
                  <p className="heading-cinzel text-sm font-bold text-maroon-900">M.A (Acharya)</p>
                  <p className="text-[9px] text-saffron-600 uppercase tracking-wider font-semibold">B.Ed · Sanskrit</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
          <span className="text-[10px] text-maroon-600 tracking-[0.3em] uppercase font-bold">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-saffron-400 to-transparent" />
        </div>
      </section>
    </>
  );
}
