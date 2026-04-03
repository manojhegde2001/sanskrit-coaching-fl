'use client';

import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, 
  FaClock, FaChevronRight, FaPaperPlane, FaUser, FaAt, FaCommentAlt 
} from 'react-icons/fa';

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setModalOpen(true);
  };

  return (
    <>
      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionHeader
            eyebrow="Connect"
            title="Get in"
            highlight="Touch"
            subtitle="Have questions about our sessions? We're here to help you start your Sanskrit journey."
            align="center"
          />
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Contact Info */}
            <div className="space-y-12">
              <div>
                <h3 className="heading-cinzel text-2xl font-bold text-maroon-900 mb-6">Contact Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-cream rounded-3xl border border-amber-100 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-saffron-gradient text-white flex items-center justify-center text-xl shrink-0">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="text-xs text-maroon-600 font-bold tracking-widest uppercase mb-1">Email</p>
                      <p className="text-sm font-semibold text-maroon-900 break-all">contact@sanskritguru.com</p>
                    </div>
                  </div>
                  <div className="p-6 bg-cream rounded-3xl border border-amber-100 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-500 text-white flex items-center justify-center text-xl shrink-0">
                      <FaWhatsapp />
                    </div>
                    <div>
                      <p className="text-xs text-maroon-600 font-bold tracking-widest uppercase mb-1">WhatsApp</p>
                      <p className="text-sm font-semibold text-maroon-900">+91 99999 99999</p>
                    </div>
                  </div>
                  <div className="p-6 bg-cream rounded-3xl border border-amber-100 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-xl shrink-0">
                      <FaClock />
                    </div>
                    <div>
                      <p className="text-xs text-maroon-600 font-bold tracking-widest uppercase mb-1">Hours (IST)</p>
                      <p className="text-sm font-semibold text-maroon-900">Mon-Sat: 6am - 9pm</p>
                    </div>
                  </div>
                  <div className="p-6 bg-cream rounded-3xl border border-amber-100 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gold-600 text-white flex items-center justify-center text-xl shrink-0">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <p className="text-xs text-maroon-600 font-bold tracking-widest uppercase mb-1">Location</p>
                      <p className="text-sm font-semibold text-maroon-900">Online — Worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Free Intro Session Card */}
              <div className="bg-maroon-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-gold">
                <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-saffron-500/20 to-transparent" />
                <h3 className="heading-cinzel text-2xl font-bold mb-4">Book Free Intro Session</h3>
                <p className="text-amber-200/60 leading-relaxed mb-8">
                  Experience our personalized coaching first-hand with a 30-minute free consultation. No commitment required.
                </p>
                <Button 
                  fullWidth 
                  size="lg"
                  onClick={() => setModalOpen(true)}
                  className="bg-white text-saffron-600 hover:bg-saffron-50 border-none"
                >
                  Book Your Session Now <FaChevronRight className="text-xs" />
                </Button>
                <p className="text-center text-[10px] text-amber-200/30 mt-4 uppercase tracking-[0.2em]">
                  Limited Slots Available Monthly
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="p-8 md:p-12 bg-white rounded-[3rem] border border-amber-100 shadow-card-hover">
              <h3 className="heading-cinzel text-2xl font-bold text-maroon-900 mb-2">Send a Message</h3>
              <p className="text-sm text-maroon-700/60 mb-8">Have a specific question? Fill out the form below.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-maroon-900 uppercase tracking-widest mb-2 px-1">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-amber-300">
                      <FaUser />
                    </div>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      placeholder="Jane Doe"
                      className="w-full pl-11 pr-4 py-4 bg-amber-50 rounded-2xl border border-amber-100 focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:bg-white transition-all text-maroon-900 placeholder:text-maroon-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-maroon-900 uppercase tracking-widest mb-2 px-1">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-amber-300">
                      <FaAt />
                    </div>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      placeholder="jane@example.com"
                      className="w-full pl-11 pr-4 py-4 bg-amber-50 rounded-2xl border border-amber-100 focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:bg-white transition-all text-maroon-900 placeholder:text-maroon-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-maroon-900 uppercase tracking-widest mb-2 px-1">Your Message</label>
                  <div className="relative">
                    <div className="absolute top-4 left-4 flex items-center pointer-events-none text-amber-300">
                      <FaCommentAlt />
                    </div>
                    <textarea 
                      id="message" 
                      rows={4} 
                      required 
                      placeholder="Tell us about your Sanskrit goals..."
                      className="w-full pl-11 pr-4 py-4 bg-amber-50 rounded-2xl border border-amber-100 focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:bg-white transition-all text-maroon-900 placeholder:text-maroon-300 resize-none"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  fullWidth 
                  size="lg"
                  className="py-5 text-lg"
                >
                  Send Message <FaPaperPlane className="text-xs ml-2" />
                </Button>

                <p className="text-[10px] text-center text-maroon-700/40 px-4 leading-relaxed">
                  By clicking send, you agree to our privacy policy. We typically reply within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder or Visual Area */}
      <section className="h-64 md:h-96 relative bg-cream border-t border-amber-100 overflow-hidden">
         <div className="absolute inset-0 pattern-bg opacity-30" />
         <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-xl">
               <FaMapMarkerAlt className="text-6xl text-saffron-500/20 mx-auto mb-4" />
               <h4 className="heading-cinzel text-xl font-bold text-maroon-900/40">Serving a Global Online Community</h4>
               <p className="text-maroon-700/30 text-sm mt-2 italic">Connect with us from New York, London, Bangalore, or anywhere in between.</p>
            </div>
         </div>
      </section>

      <Modal 
        isOpen={modalOpen} 
        onClose={() => {
          setModalOpen(false);
          setFormSubmitted(false);
        }}
        type="booking"
      />
    </>
  );
}
