'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import { FaArrowRight, FaStar, FaGlobe } from 'react-icons/fa';

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
        {/* Background pattern */}
        <div className="absolute inset-0 pattern-bg opacity-60" />

        {/* Decorative circles */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-saffron-100/60 to-transparent -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-gold-100/40 to-transparent translate-y-1/4 -translate-x-1/4" />

        {/* Om watermark */}
        <span className="om-watermark text-maroon-900 right-10 top-1/2 -translate-y-1/2 text-[20rem] select-none pointer-events-none">
          ॐ
        </span>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-saffron-50 border border-saffron-200 text-saffron-600 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 animate-fade-in">
              <FaStar className="text-saffron-400" />
              Premium One-on-One Sanskrit Coaching
            </div>

            {/* Headline */}
            <h1 className="heading-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-maroon-900 leading-tight mb-6 animate-fade-up">
              Learn Sanskrit with{' '}
              <span className="gradient-text">Personalized</span>
              <br />
              Guidance
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-maroon-700/70 leading-relaxed mb-8 max-w-2xl animate-fade-up">
              Experience transformative one-on-one learning designed around your goals — whether you seek to understand the Bhagavad Gita, chant sacred mantras, or master Sanskrit grammar.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12 animate-fade-up">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setModalOpen(true)}
              >
                Book a Free Intro Session
                <FaArrowRight className="text-sm" />
              </Button>
              <Button variant="secondary" size="lg" href="/one-on-one">
                Explore 1-on-1 Learning
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap items-center gap-6 animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['PN', 'AM', 'SK', 'RV'].map((initials) => (
                    <div
                      key={initials}
                      className="w-9 h-9 rounded-full bg-saffron-gradient border-2 border-white flex items-center justify-center text-white text-xs font-bold"
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
                  <p className="text-xs text-maroon-600/70">
                    <strong className="text-maroon-900">200+</strong> students worldwide
                  </p>
                </div>
              </div>

              <div className="w-px h-8 bg-amber-200 hidden sm:block" />

              <div className="flex items-center gap-2 text-sm text-maroon-600/70">
                <FaGlobe className="text-saffron-400" />
                <span>USA · UK · Canada · Australia · India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
          <span className="text-xs text-maroon-600 tracking-widest uppercase">Scroll</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-saffron-400 to-transparent animate-pulse" />
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
