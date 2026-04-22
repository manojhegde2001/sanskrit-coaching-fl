'use client';

import { howItWorksSteps } from '@/lib/mockData';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { FaWhatsapp } from 'react-icons/fa';

const WA_LINK =
  'https://wa.me/919482111881?text=Hello%2C%20I%27m%20interested%20in%20Sanskrit%20classes.%20I%20would%20like%20to%20book%20a%20free%20demo%20session.';

export default function HowItWorksSection() {
  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      <div className="absolute inset-0 pattern-bg opacity-30" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Simple Process"
          title="How It"
          highlight="Works"
          subtitle="Getting started is simple. Here is how your journey begins."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          {howItWorksSteps.map((step, index) => (
            <div
              key={step.id}
              className="relative flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-amber-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Step number */}
              <div className="w-14 h-14 rounded-2xl bg-saffron-gradient flex items-center justify-center text-white text-3xl mb-5 shadow-lg shadow-saffron-500/20">
                {step.icon}
              </div>
              <div className="w-8 h-8 rounded-full bg-maroon-900 flex items-center justify-center text-white text-xs font-bold mb-4 -mt-2 shadow">
                {step.id}
              </div>
              <h3 className="heading-cinzel text-lg font-bold text-maroon-900 mb-3">{step.title}</h3>
              <p className="text-sm text-maroon-700/65 leading-relaxed">{step.description}</p>

              {/* Connector line (only between cards) */}
              {index < howItWorksSteps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-12 w-8 h-0.5 bg-saffron-200 z-10" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button href="/contact" size="lg" className="rounded-2xl">
            Book Your Free Demo Session
          </Button>
          <Button
            href={WA_LINK}
            variant="secondary"
            size="lg"
            className="rounded-2xl"
          >
            <FaWhatsapp className="text-lg" />
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
