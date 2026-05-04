'use client';

import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import { howItWorksSteps, faqs } from '@/lib/mockData';
import { FaChevronDown, FaWhatsapp } from 'react-icons/fa';

const WA_LINK =
  'https://wa.me/919482111881?text=Hello%2C%20I%27m%20interested%20in%20Sanskrit%20classes.%20I%20would%20like%20to%20book%20a%20free%20demo%20session.';

export default function HowItWorksContent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <>
      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionHeader
            eyebrow="The Path"
            title="How It"
            highlight="Works"
            subtitle="Getting started is simple. Here is your step-by-step path to personalized Sanskrit learning."
            align="center"
          />
        </div>
      </section>

      {/* Main Process Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {howItWorksSteps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Icon Area */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="w-56 h-56 rounded-[3rem] bg-gradient-to-br from-saffron-50 to-gold-50 border-4 border-white shadow-card flex items-center justify-center text-7xl group hover:scale-105 transition-transform duration-500">
                    <span className="group-hover:animate-float">{step.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-saffron-gradient text-white font-bold text-xl mb-4 shadow-saffron">
                    {step.id}
                  </div>
                  <h3 className="heading-cinzel text-2xl font-bold text-maroon-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-maroon-700/70 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs after steps */}
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            <Button
              href="/contact"
              size="lg"
              className="rounded-2xl shadow-xl"
            >
              Book Free Demo Session
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

      {/* FAQ Section */}
      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Questions?"
            title="Frequently Asked"
            highlight="Questions"
            align="center"
          />

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white border border-amber-100 rounded-2xl overflow-hidden shadow-card"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-amber-50"
                  aria-expanded={openFaq === faq.id}
                >
                  <span className="font-bold text-maroon-900 leading-tight pr-4">
                    {faq.question}
                  </span>
                  <FaChevronDown className={`shrink-0 text-saffron-500 transition-transform duration-300 ${
                    openFaq === faq.id ? 'rotate-180' : ''
                  }`} />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === faq.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-maroon-700/70 border-t border-amber-50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-white/50 rounded-3xl border border-dashed border-amber-200">
            <h4 className="heading-cinzel text-lg font-bold text-maroon-900 mb-2">Have More Questions?</h4>
            <p className="text-sm text-maroon-700/60 mb-6">
              Reach out to us via WhatsApp or the contact form — we are happy to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href={WA_LINK}>
                <FaWhatsapp className="text-base" />
                Chat on WhatsApp
              </Button>
              <Button variant="ghost" href="/contact">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-saffron-gradient text-white text-center rounded-t-[4rem]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-cinzel text-3xl md:text-5xl font-bold mb-6">
            Start Your Sanskrit Journey Today
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Book your free demo session now — no commitment required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white/80 text-white hover:bg-white hover:text-saffron-600"
            >
              Book Free Demo Session
            </Button>
            <Button
              href={WA_LINK}
              variant="ghost"
              size="lg"
              className="text-white hover:bg-white/10"
            >
              <FaWhatsapp className="text-lg" />
              Chat on WhatsApp
            </Button>
          </div>
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
