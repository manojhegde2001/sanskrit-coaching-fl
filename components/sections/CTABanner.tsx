'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import { FaArrowRight } from 'react-icons/fa';

export default function CTABanner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-20 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-saffron-gradient" />
        <div className="absolute inset-0 pattern-bg opacity-10" />

        {/* Decorative Om */}
        <span className="absolute right-8 top-1/2 -translate-y-1/2 text-white/5 text-[18rem] font-serif select-none pointer-events-none">
          ॐ
        </span>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/70 text-sm font-medium tracking-widest uppercase mb-4">
            Begin Your Journey Today
          </p>
          <h2 className="heading-cinzel text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            Your First Demo Session is{' '}
            <span className="text-amber-200">Free</span>
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Experience our personalized teaching with a free 15-minute demo session. No commitment — just an introductory session to finalize your path.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setModalOpen(true)}
              className="border-white/80 text-white hover:bg-white hover:text-saffron-600"
            >
              Book Free Session
              <FaArrowRight />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href="/courses"
              className="text-white hover:bg-white/10"
            >
              Browse Programs
            </Button>
          </div>
        </div>
      </section>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} type="booking" />
    </>
  );
}
