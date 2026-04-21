'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import { FaStar, FaGlobe } from 'react-icons/fa';

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ─── MOBILE HERO ─── */}
      <section className="relative bg-cream overflow-hidden lg:hidden">
        {/* Decorative blobs */}
        <div className="absolute inset-0 pattern-bg opacity-30" />
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-saffron-100/40" />
        <div className="absolute bottom-0 -left-10 w-40 h-40 rounded-full bg-amber-100/30" />

        <div className="relative z-10 w-full px-5 pt-20 pb-10 flex flex-col">

          {/* 1. Label */}
          <span className="inline-flex items-center gap-1.5 self-start bg-saffron-50 border border-saffron-200 text-saffron-600 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
            <FaStar className="text-saffron-400 text-[8px]" />
            Sanskrit · Live · 1-on-1
          </span>

          {/* 2. Heading */}
          <h1 className="heading-cinzel text-3xl font-semibold text-maroon-900 leading-tight mb-3">
            Learn Sanskrit<br />
            <span className="gradient-text">the Right Way</span>
          </h1>

          {/* 3. Subtext */}
          <p className="text-sm text-maroon-700/65 leading-relaxed mb-6 max-w-xs">
            Personalized 1-on-1 coaching with Prasanna Sir — rooted in tradition, built for you.
          </p>

          {/* 4. CTAs */}
          <div className="flex flex-col gap-2.5 w-full mb-7">
            <Button
              variant="primary"
              size="lg"
              href="https://wa.me/919482111881?text=Namaste!%20I%20am%20interested%20in%20learning%20Sanskrit%20with%20Prasanna%20Sir."
              className="w-full rounded-xl justify-center shadow-md shadow-saffron-500/20"
            >
              WhatsApp Now
            </Button>
            <Button
              variant="secondary"
              size="md"
              onClick={() => setModalOpen(true)}
              className="w-full rounded-xl justify-center"
            >
              Book Free Demo
            </Button>
          </div>

          {/* 5. Instructor strip */}
          <div className="flex items-center gap-3 border-l-2 border-saffron-400 pl-4">
            <div className="w-11 h-11 rounded-lg overflow-hidden border border-white shadow flex-shrink-0">
              <img src="/image.png" alt="Prasanna" className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0">
              <p className="heading-cinzel text-sm font-bold text-maroon-900 truncate">Prasanna</p>
              <p className="text-[10px] text-saffron-600 font-semibold uppercase tracking-wider truncate">
                M.A Acharya · B.Ed · 5+ Yrs
              </p>
              <div className="flex gap-0.5 mt-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-[10px]">★</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── DESKTOP HERO (two-column, lg and above) ─── */}
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
              <div className="inline-flex items-center gap-2 bg-saffron-50 border border-saffron-200 text-saffron-600 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8 animate-fade-in">
                <FaStar className="text-saffron-400" />
                Learn with Prasanna (Acharya, Sanskrit)
              </div>

              <h1 className="heading-cinzel text-5xl lg:text-7xl font-bold text-maroon-900 leading-[1.1] mb-6 animate-fade-up">
                Learn Sanskrit <span className="gradient-text">the Right Way</span>
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-xl text-gold-600 font-medium tracking-wide border-r border-gold-200 pr-4">सनातनधारा</span>
                <span className="text-xl text-gold-600 font-medium tracking-wide">ಸನಾತನಧಾರ</span>
              </div>

              <p className="text-xl text-maroon-700/70 leading-relaxed mb-10 max-w-xl animate-fade-up">
                Personalized one-on-one learning with traditional depth and modern clarity. Your child needs the best cultured education — rooted in tradition, delivered with excellence.
              </p>

              <div className="flex gap-4 mb-12 animate-fade-up">
                <Button
                  variant="primary"
                  size="lg"
                  href="https://wa.me/919482111881?text=Namaste!%20I%20am%20interested%20in%20learning%20Sanskrit%20with%20Prasanna%20Sir."
                  className="rounded-2xl shadow-xl shadow-saffron-500/20"
                >
                  WhatsApp Now
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => setModalOpen(true)}
                  className="rounded-2xl"
                >
                  Book Free Demo
                </Button>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-6 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {['PN', 'AM', 'SK', 'RV'].map((initials) => (
                      <div
                        key={initials}
                        className="w-9 h-9 rounded-full bg-saffron-gradient border-2 border-white flex items-center justify-center text-white text-[10px] font-bold"
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="text-amber-400 text-xs">★</span>
                      ))}
                    </div>
                    <p className="text-[10px] text-maroon-600/70 uppercase tracking-widest font-bold">
                      <strong className="text-maroon-900">200+</strong> Students
                    </p>
                  </div>
                </div>
                <div className="w-px h-8 bg-amber-200" />
                <div className="flex items-center gap-3 text-xs text-maroon-600/70 font-semibold tracking-wide uppercase">
                  <FaGlobe className="text-saffron-400 text-sm" />
                  <span>USA · UK · Canada · UAE · India</span>
                </div>
              </div>
            </div>

            {/* Instructor Image */}
            <div className="col-span-5 relative group">
              <div className="absolute -inset-4 bg-maroon-900/5 rounded-[4rem] rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-700" />
              <div className="absolute inset-0 bg-saffron-gradient opacity-10 rounded-[4rem] -rotate-3 scale-105" />
              <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white animate-fade-in">
                <img
                  src="/image.png"
                  alt="Prasanna - Sanskrit Instructor"
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
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-saffron-50 flex items-center justify-center text-saffron-600 text-xl shadow-inner">
                    <FaStar />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-maroon-900">M.A (Acharya)</p>
                    <p className="text-[9px] text-maroon-600/60 uppercase tracking-wider">Top Qualified</p>
                  </div>
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

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type="booking"
      />
    </>
  );
}
