'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/sections/CTABanner';
import { FaGraduationCap, FaHeart, FaStar, FaBookOpen, FaWhatsapp } from 'react-icons/fa';

const WA_LINK =
  'https://wa.me/919482111881?text=Hello%2C%20I%27m%20interested%20in%20Sanskrit%20classes.%20I%20would%20like%20to%20book%20a%20free%20demo%20session.';

export default function AboutPage() {
  const qualifications = [
    {
      icon: <FaGraduationCap />,
      title: 'M.A (Acharya) in Sanskrit',
      desc: 'A postgraduate degree mastering classical Sanskrit grammar, literature, and Vedic studies.',
    },
    {
      icon: <FaBookOpen />,
      title: 'B.Ed (Shiksha-sastri)',
      desc: 'Specialized teacher training with a focus on Sanskrit pedagogy and academic instruction.',
    },
    {
      icon: <FaStar />,
      title: '5+ Years Teaching Experience',
      desc: 'Years of dedicated experience guiding students from beginners to advanced learners.',
    },
    {
      icon: <FaHeart />,
      title: 'Multilingual Teaching',
      desc: 'Teaching in English, Sanskrit, Telugu, and Kannada — making learning accessible to every student.',
    },
  ];

  return (
    <main className="bg-cream page-container min-h-screen">
      {/* Bio Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            eyebrow="About Sanatanadhara"
            title="About"
            highlight="Sanatanadhara"
            subtitle="Making Sanskrit learning simple, personalized, and accessible for every student."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-12">
            {/* Image Col */}
            <div className="relative group animate-fade-in order-2 lg:order-1 max-w-md mx-auto lg:mx-0 w-full">
              <div className="absolute -inset-4 bg-maroon-900/5 rounded-[3rem] -rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-500" />
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src="/image.png"
                  alt="Prasanna - Sanskrit Instructor at Sanatanadhara"
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
              <h2 className="heading-cinzel text-3xl font-bold text-maroon-900 mb-2">
                Teaching Approach
              </h2>
              <p className="text-saffron-600 font-bold tracking-widest uppercase text-xs mb-6">
                Simple · Personalized · Effective
              </p>

              <p className="text-maroon-700/80 leading-relaxed mb-6 text-lg">
                Sanatanadhara focuses on making Sanskrit learning simple and personalized for every student. Whether you are a complete beginner or an advanced learner, each session is adapted to your pace and goals.
              </p>

              <p className="text-maroon-700/70 mb-8 leading-relaxed">
                Every session is built on strong basics, clear explanations, and personal attention. The goal is to ensure you not only learn Sanskrit but truly understand and enjoy it.
              </p>

              {/* Language and Mode info */}
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
                <Button href="/contact" size="lg" className="rounded-2xl">
                  Book Free Session
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
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="section-padding bg-maroon-900 relative overflow-hidden">
        <span className="absolute right-8 top-1/2 -translate-y-1/2 text-white/5 text-[16rem] font-serif select-none">ॐ</span>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-saffron-400 mb-6">
            Teaching Philosophy
          </span>
          <blockquote className="heading-cinzel text-2xl md:text-3xl font-bold text-white leading-relaxed mb-8">
            &ldquo;Simple explanations, strong basics, and personalized attention — that is how every student thrives.&rdquo;
          </blockquote>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-amber-200/60 font-semibold tracking-widest uppercase text-sm">— Sanatanadhara</p>
        </div>
      </section>

      {/* Experience & Qualifications */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Credentials"
            title="Experience &"
            highlight="Qualifications"
            subtitle="A teaching background rooted in tradition and powered by academic excellence."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {qualifications.map((q, i) => (
              <div key={i} className="flex gap-5 p-6 bg-cream rounded-2xl border border-amber-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-2xl bg-saffron-50 flex items-center justify-center text-saffron-600 text-xl shrink-0 shadow-sm border border-amber-100">
                  {q.icon}
                </div>
                <div>
                  <h3 className="heading-cinzel text-base font-bold text-maroon-900 mb-1.5">{q.title}</h3>
                  <p className="text-sm text-maroon-700/65 leading-relaxed">{q.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
