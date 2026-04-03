'use client';

import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import { howItWorksSteps, faqs } from '@/lib/mockData';
import { FaChevronDown, FaLaptopCode, FaVideo, FaLayerGroup, FaCalendarCheck, FaClock, FaCommentDots } from 'react-icons/fa';

export default function HowItWorksPage() {
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
            title="Step-by-Step"
            highlight="Guide"
            subtitle="Understand how we bring ancient wisdom to your modern screen. Simple, effective, and personalized."
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
                {/* Image Placeholder / Icon Area */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="w-64 h-64 rounded-[3rem] bg-gradient-to-br from-saffron-50 to-gold-50 border-4 border-white shadow-card flex items-center justify-center text-8xl group hover:scale-105 transition-transform duration-500">
                    <span className="group-hover:animate-float">{step.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-saffron-gradient text-white font-bold text-xl mb-4 shadow-saffron">
                    {step.id}
                  </div>
                  <h3 className="heading-cinzel text-2xl font-bold text-maroon-900 mb-4">{step.title}</h3>
                  <p className="text-maroon-700/70 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Structure & Tools */}
      <section className="section-padding bg-maroon-900 text-white relative overflow-hidden">
         <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-saffron-500/10 to-transparent" />
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeader 
               title="Class Structure &"
               highlight="Tools"
               subtitle="We use modern technology to deliver a seamless learning experience."
               align="center"
               dark
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center hover:bg-white/10 transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-saffron-gradient flex items-center justify-center text-3xl mx-auto mb-6">
                     <FaVideo />
                  </div>
                  <h4 className="heading-cinzel text-lg font-bold mb-3">Live Sessions</h4>
                  <p className="text-sm text-amber-200/60 leading-relaxed">
                     One-on-one sessions via Zoom or Google Meet. Interactive and personal.
                  </p>
               </div>
               <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center hover:bg-white/10 transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center text-3xl mx-auto mb-6">
                     <FaLayerGroup />
                  </div>
                  <h4 className="heading-cinzel text-lg font-bold mb-3">Custom Materials</h4>
                  <p className="text-sm text-amber-200/60 leading-relaxed">
                     Digital PDFs, audio guides, and worksheets customized for your goals.
                  </p>
               </div>
               <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center hover:bg-white/10 transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-3xl mx-auto mb-6">
                     <FaCalendarCheck />
                  </div>
                  <h4 className="heading-cinzel text-lg font-bold mb-3">Flexible Booking</h4>
                  <p className="text-sm text-amber-200/60 leading-relaxed">
                     Reschedule sessions with 24-hour notice. We work around your schedule.
                  </p>
               </div>
               <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center hover:bg-white/10 transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-gold-600 flex items-center justify-center text-3xl mx-auto mb-6">
                     <FaClock />
                  </div>
                  <h4 className="heading-cinzel text-lg font-bold mb-3">Any Timezone</h4>
                  <p className="text-sm text-amber-200/60 leading-relaxed">
                     Students from USA, UK, and Australia — we find the perfect slot for you.
                  </p>
               </div>
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
               We're here to help. Reach out to us via WhatsApp or book a free intro session to discuss anything.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <Button onClick={() => setModalOpen(true)}>Book Free Session</Button>
               <Button variant="ghost" href="/contact">Go to Contact</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-saffron-gradient text-white text-center rounded-t-[4rem]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-cinzel text-3xl md:text-5xl font-bold mb-6">Ready to Embark on Your Journey?</h2>
          <p className="text-white/80 text-lg mb-10">Start your first lesson today with a zero-commitment free consultation.</p>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => setModalOpen(true)}
            className="border-white/80 text-white hover:bg-white hover:text-saffron-600"
          >
            Schedule Free Session
          </Button>
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
