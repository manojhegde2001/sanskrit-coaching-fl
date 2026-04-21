'use client';

import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/sections/CTABanner';
import { FaGraduationCap, FaHeart, FaStar, FaBookOpen, FaCheckCircle, FaScroll } from 'react-icons/fa';

export default function AboutPage() {
  const timeline = [
    { year: '5+ Years', event: 'Dedicated teaching experience in Sanskrit and Vedic studies.' },
    { year: 'Acharya', event: 'Completed M.A (Acharya) in Sanskrit, mastering classical grammar and literature.' },
    { year: 'Shiksha-sastri', event: 'Completed B.Ed (Shiksha-sastri), specialized in Sanskrit pedagogy.' },
    { year: 'Multilingual', event: 'Teaching proficiency in English, Sanskrit, Telugu, and Kannada.' },
    { year: '1:1 Focus', event: 'Specialize in personalized learning paths for students from Grade 1 to 12.' },
  ];

  const qualities = [
    { icon: <FaGraduationCap />, title: 'Academic Mastery', desc: 'M.A (Acharya) and B.Ed (Shiksha-sastri) qualified teacher with deep roots in traditional Sanskrit studies.' },
    { icon: <FaHeart />, title: 'Multilingual Teaching', desc: 'Comfortable teaching in English, Sanskrit, Telugu, and Kannada, making learning accessible to diverse students.' },
    { icon: <FaStar />, title: '5+ Years Experience', desc: 'Years of experience in guiding students from beginners to advanced scriptural study.' },
    { icon: <FaBookOpen />, title: 'Personalized Approach', desc: 'Focus on 1:1 sessions that adapt to your pace, whether for academic support or personal interest.' },
  ];

  return (
    <main className="bg-cream page-container min-h-screen">
      {/* Bio Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            eyebrow="Lead Instructor"
            title="Meet"
            highlight="Prasanna"
            subtitle="Bridging traditional depth with modern educational clarity."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-12">
            {/* Image Col */}
            <div className="relative group animate-fade-in order-2 lg:order-1 max-w-md mx-auto lg:mx-0 w-full">
              <div className="absolute -inset-4 bg-maroon-900/5 rounded-[3rem] -rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-500" />
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src="/image.png"
                  alt="Prasanna - Sanskrit Instructor"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -left-6 top-10 bg-white rounded-2xl shadow-xl p-4 border border-amber-100 text-center animate-fade-up">
                <p className="heading-cinzel text-2xl font-bold gradient-text">1:1</p>
                <p className="text-[10px] text-maroon-600/60 font-bold uppercase tracking-widest">Sessions</p>
              </div>
              <div className="absolute -right-6 bottom-20 bg-white rounded-2xl shadow-xl p-4 border border-amber-100 text-center animate-fade-up delay-100">
                <p className="heading-cinzel text-2xl font-bold gradient-text">5+</p>
                <p className="text-[10px] text-maroon-600/60 font-bold uppercase tracking-widest">Years Exp.</p>
              </div>
            </div>

            {/* Info Col */}
            <div className="animate-fade-up order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-maroon-900 flex items-center justify-center text-saffron-500 shadow-lg">
                  <FaScroll className="text-xl" />
                </div>
                <div>
                  <h3 className="heading-cinzel text-3xl font-bold text-maroon-900">Academic Excellence</h3>
                  <p className="text-saffron-600 font-bold tracking-widest uppercase text-xs">M.A (Acharya) · B.Ed</p>
                </div>
              </div>
              
              <p className="text-maroon-700/80 leading-relaxed mb-6 text-lg">
                Namaste! I am <strong>Prasanna</strong>. Teaching is not just a profession for me—it is my passion. My mission is to ensure that every child receives the best cultured education, rooted in our traditional values but delivered with modern clarity.
              </p>
              
              <p className="text-maroon-700/70 mb-8 leading-relaxed">
                With over five years of dedicated experience in Sanskrit pedagogy and a background in traditional Acharya studies, I focus on bridging ancient wisdom with contemporary learning needs. Whether it is Master&apos;s level grammar or basic shlokas for children, I adapt the curriculum to the student&apos;s unique journey.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="p-4 bg-white rounded-2xl border border-amber-50 shadow-sm">
                  <p className="text-[10px] text-maroon-600/50 uppercase font-bold tracking-widest mb-1">Languages</p>
                  <p className="text-sm font-bold text-maroon-900">English, Sanskrit, Telugu, Kannada</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-amber-50 shadow-sm">
                  <p className="text-[10px] text-maroon-600/50 uppercase font-bold tracking-widest mb-1">Teaching Mode</p>
                  <p className="text-sm font-bold text-maroon-900">Online Only (1:1)</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button href="/contact" size="lg" className="rounded-2xl">Book Free Session</Button>
                <Button href="https://wa.me/919482111881" variant="secondary" size="lg" className="rounded-2xl">WhatsApp Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-maroon-900 relative overflow-hidden">
        <span className="absolute right-8 top-1/2 -translate-y-1/2 text-white/5 text-[16rem] font-serif select-none">ॐ</span>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-saffron-400 mb-6">
            Teaching Philosophy
          </span>
          <blockquote className="heading-cinzel text-2xl md:text-3xl font-bold text-white leading-relaxed mb-8">
            &ldquo;Sanskrit is not merely a language to be learned — it is a way of seeing. When you understand Sanskrit, you begin to see the universe as the ancient sages did.&rdquo;
          </blockquote>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-amber-200/60 font-semibold tracking-widest uppercase text-sm">— Prasanna</p>
        </div>
      </section>

      {/* Qualifications */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Credentials"
            title="Experience &"
            highlight="Qualifications"
            subtitle="A teaching career rooted in tradition and powered by academic excellence."
          />
          <div className="relative mt-12">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-saffron-300 to-transparent" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 items-start pl-2">
                  <div className="w-9 h-9 rounded-full bg-saffron-gradient flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-saffron z-10 relative">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-saffron-500 tracking-widest mb-1 block">
                      {item.year}
                    </span>
                    <p className="text-maroon-900 font-bold text-lg mb-1">{item.event.split(',')[0]}</p>
                    <p className="text-maroon-700/60 text-sm">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
