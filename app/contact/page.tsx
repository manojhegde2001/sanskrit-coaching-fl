'use client';

import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, 
  FaPaperPlane, FaUser, FaAt, FaCommentAlt, FaScroll 
} from 'react-icons/fa';
import { Input, Textarea } from 'rizzui';

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setModalOpen(true);
  };

  return (
    <main className="bg-cream page-container min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Start Your"
            highlight="Learning Journey"
            subtitle="Connect with Prasanna Sir for personalized one-on-one sessions and academic guidance."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 bg-white rounded-[2.5rem] shadow-xl border border-amber-100 animate-fade-in relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-saffron-50 rounded-full blur-3xl opacity-50" />
                <h3 className="heading-cinzel text-2xl font-bold text-maroon-900 mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-saffron-50 flex items-center justify-center text-saffron-600 shrink-0 shadow-sm">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <p className="text-[10px] text-maroon-600 font-bold tracking-widest uppercase mb-1">Email</p>
                      <p className="text-sm font-bold text-maroon-900 break-all">harihiom02@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-saffron-50 flex items-center justify-center text-saffron-600 shrink-0 shadow-sm">
                      <FaWhatsapp className="text-xl" />
                    </div>
                    <div>
                      <p className="text-[10px] text-maroon-600 font-bold tracking-widest uppercase mb-1">WhatsApp</p>
                      <p className="text-sm font-bold text-maroon-900">9482111881</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-saffron-50 flex items-center justify-center text-saffron-600 shrink-0 shadow-sm">
                      <FaPhone className="text-xl" />
                    </div>
                    <div>
                      <p className="text-[10px] text-maroon-600 font-bold tracking-widest uppercase mb-1">Phone</p>
                      <p className="text-sm font-bold text-maroon-900">8073362748</p>
                    </div>
                  </div>

                  <div className="p-6 bg-maroon-900 rounded-3xl text-white">
                    <p className="text-xs text-saffron-400 font-bold tracking-widest uppercase mb-2">Learning Mode</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <p className="text-lg font-bold">Online Only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Free Demo Card */}
              <div className="bg-saffron-gradient rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
                  <div className="absolute right-0 bottom-0 text-white/5 text-8xl -mb-4 -mr-4 group-hover:scale-110 transition-transform">
                      <FaScroll />
                  </div>
                  <h3 className="heading-cinzel text-xl font-bold mb-3">Not sure where to start?</h3>
                  <p className="text-white/80 text-sm mb-6">Book a 15-minute free demo call with Prasanna Sir to discuss your goals.</p>
                  <Button 
                    variant="outline" 
                    fullWidth 
                    onClick={() => setModalOpen(true)}
                    className="bg-white/10 hover:bg-white hover:text-saffron-600 border-white/20"
                  >
                    Schedule Demo Session
                  </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[3rem] border border-amber-100 shadow-2xl">
                <h3 className="heading-cinzel text-2xl font-bold text-maroon-900 mb-2">Send a Message</h3>
                <p className="text-sm text-maroon-700/60 mb-8">Have questions about specific courses? Fill out the form below.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      placeholder="Your Name"
                      prefix={<FaUser className="text-saffron-400" />}
                      className="rizzui-input-custom"
                      inputClassName="bg-amber-50 border-amber-100 rounded-2xl focus:ring-saffron-400 py-4"
                      labelClassName="text-[10px] font-bold text-maroon-900 uppercase tracking-widest mb-2"
                      required
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="example@mail.com"
                      prefix={<FaAt className="text-saffron-400" />}
                      className="rizzui-input-custom"
                      inputClassName="bg-amber-50 border-amber-100 rounded-2xl focus:ring-saffron-400 py-4"
                      labelClassName="text-[10px] font-bold text-maroon-900 uppercase tracking-widest mb-2"
                      required
                    />
                  </div>

                  <Textarea
                    label="Your Questions"
                    placeholder="I want to learn Sanskrit for..."
                    className="rizzui-input-custom"
                    textareaClassName="bg-amber-50 border-amber-100 rounded-2xl focus:ring-saffron-400 py-4 resize-none min-h-[120px]"
                    labelClassName="text-[10px] font-bold text-maroon-900 uppercase tracking-widest mb-2"
                    required
                  />

                  <Button 
                    type="submit" 
                    fullWidth 
                    size="lg"
                    className="py-5 text-lg rounded-2xl"
                  >
                    Send Inquiry <FaPaperPlane className="text-xs ml-2" />
                  </Button>

                  <p className="text-[10px] text-center text-maroon-700/40 px-4 leading-relaxed uppercase tracking-wider">
                    Prasanna Sir typically replies within 24 hours.
                  </p>
                </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Global Area */}
      <section className="h-64 md:h-96 relative bg-white border-t border-amber-100 overflow-hidden">
         <div className="absolute inset-0 pattern-bg opacity-30" />
         <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-xl">
               <FaMapMarkerAlt className="text-6xl text-saffron-500/10 mx-auto mb-4" />
               <h4 className="heading-cinzel text-2xl font-bold text-maroon-900/30">Available Worldwide Online</h4>
               <p className="text-maroon-700/20 text-sm mt-2 italic font-medium">Join our global community of learners from USA, UK, India, and beyond.</p>
            </div>
         </div>
      </section>

      <Modal 
        isOpen={modalOpen} 
        onClose={() => {
          setModalOpen(false);
          setFormSubmitted(false);
        }}
        type={formSubmitted ? "booking" : "generic"}
      />
    </main>
  );
}
