'use client';

import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import {
  FaPhone, FaEnvelope, FaWhatsapp,
  FaPaperPlane, FaUser, FaMobileAlt
} from 'react-icons/fa';
import { Input, Textarea } from 'rizzui';
import { siteData } from '@/lib/mockData';

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const { site, integrations } = siteData;
  const WA_LINK = `https://wa.me/${integrations.whatsapp.number}?text=${encodeURIComponent(integrations.whatsapp.defaultMessage)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-cream page-container min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Get in"
            highlight="Touch"
            subtitle="Reach out to start your Sanskrit learning journey. We will respond promptly."
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
                      <FaPhone className="text-xl" />
                    </div>
                    <div>
                      <p className="text-[10px] text-maroon-600 font-bold tracking-widest uppercase mb-1">Phone</p>
                      <a
                        href={`tel:+91${site.contact.phone}`}
                        className="text-sm font-bold text-maroon-900 hover:text-saffron-600 transition-colors"
                      >
                        {site.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 shrink-0 shadow-sm">
                      <FaWhatsapp className="text-xl" />
                    </div>
                    <div>
                      <p className="text-[10px] text-maroon-600 font-bold tracking-widest uppercase mb-1">WhatsApp</p>
                      <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-maroon-900 hover:text-saffron-600 transition-colors"
                      >
                        {site.contact.whatsapp}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-saffron-50 flex items-center justify-center text-saffron-600 shrink-0 shadow-sm">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <p className="text-[10px] text-maroon-600 font-bold tracking-widest uppercase mb-1">Email</p>
                      <a
                        href={`mailto:${site.contact.email}`}
                        className="text-sm font-bold text-maroon-900 hover:text-saffron-600 transition-colors break-all"
                      >
                        {site.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="p-6 bg-maroon-900 rounded-3xl text-white">
                    <p className="text-xs text-saffron-400 font-bold tracking-widest uppercase mb-2">Learning Mode</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <p className="text-lg font-bold">{site.mode} Only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA Card */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-saffron-gradient rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="absolute right-0 bottom-0 text-white/5 text-8xl -mb-4 -mr-4 group-hover:scale-110 transition-transform">
                  <FaWhatsapp />
                </div>
                <h3 className="heading-cinzel text-xl font-bold mb-3">Chat on WhatsApp</h3>
                <p className="text-white/80 text-sm mb-4">
                  The quickest way to reach us. We will respond promptly to schedule your free demo session.
                </p>
                <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-bold px-4 py-2 rounded-full border border-white/30">
                  <FaWhatsapp className="text-base" />
                  Open WhatsApp
                </div>
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[3rem] border border-amber-100 shadow-2xl">
              {!submitted ? (
                <>
                  <h3 className="heading-cinzel text-2xl font-bold text-maroon-900 mb-2">Send a Message</h3>
                  <p className="text-sm text-maroon-700/60 mb-8">
                    Fill out the form below and we will get back to you shortly.
                  </p>

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
                        label="Phone Number"
                        type="tel"
                        placeholder="Your Phone Number"
                        prefix={<FaMobileAlt className="text-saffron-400" />}
                        className="rizzui-input-custom"
                        inputClassName="bg-amber-50 border-amber-100 rounded-2xl focus:ring-saffron-400 py-4"
                        labelClassName="text-[10px] font-bold text-maroon-900 uppercase tracking-widest mb-2"
                        required
                      />
                    </div>

                    <Textarea
                      label="Your Message"
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
                      Send Message <FaPaperPlane className="text-xs ml-2" />
                    </Button>

                    <p className="text-[10px] text-center text-maroon-700/40 px-4 leading-relaxed uppercase tracking-wider">
                      We typically reply within 24 hours.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 rounded-3xl bg-emerald-50 flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">✅</span>
                  </div>
                  <h3 className="heading-cinzel text-2xl font-bold text-maroon-900 mb-3">Message Received!</h3>
                  <p className="text-maroon-700/70 mb-8">
                    Thank you for reaching out. We will get back to you within 24 hours.
                  </p>
                  <Button href={WA_LINK} variant="primary" fullWidth size="lg">
                    <FaWhatsapp className="text-lg" />
                    Also Chat on WhatsApp
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
