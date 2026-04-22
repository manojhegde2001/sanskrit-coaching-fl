'use client';
import Button from '@/components/ui/Button';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';

const WA_LINK =
  'https://wa.me/919482111881?text=Hello%2C%20I%27m%20interested%20in%20Sanskrit%20classes.%20I%20would%20like%20to%20book%20a%20free%20demo%20session.';

export default function CTABanner() {
  return (
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
          Start your Sanskrit journey today
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Book your free demo session now — no commitment, just a simple 15-minute introduction to get started.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            href={WA_LINK}
            className="border-white/80 text-white hover:bg-white hover:text-saffron-600"
          >
            <FaWhatsapp className="text-lg" />
            Chat on WhatsApp
          </Button>
          <Button
            variant="ghost"
            size="lg"
            href="/contact"
            className="text-white hover:bg-white/10"
          >
            Contact Us
            <FaArrowRight className="text-xs" />
          </Button>
        </div>
      </div>
    </section>
  );
}
