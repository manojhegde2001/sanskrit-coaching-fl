import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/sections/CTABanner';
import { FaGraduationCap, FaHeart, FaStar, FaBookOpen, FaCheckCircle } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Pt. Ravi Sharma — expert Sanskrit teacher with 8+ years of experience teaching students worldwide. Learn about his teaching philosophy and qualifications.',
};

const timeline = [
  { year: '2015', event: 'Completed MA in Sanskrit from Banaras Hindu University (BHU)' },
  { year: '2016', event: 'Began teaching Sanskrit at a reputed gurukul in Varanasi' },
  { year: '2018', event: 'Started online coaching for international and NRI students' },
  { year: '2020', event: 'Expanded to structured courses for beginners and Bhagavad Gita' },
  { year: '2022', event: 'Reached 150+ students across 12 countries' },
  { year: '2025', event: '200+ students taught, 15+ countries, 5-star average rating' },
];

const qualities = [
  { icon: <FaGraduationCap />, title: 'Academic Excellence', desc: 'MA Sanskrit from BHU — one of India\'s premier Sanskrit universities. Deep grounding in Paninian grammar and Vedic tradition.' },
  { icon: <FaHeart />, title: 'Passion for Teaching', desc: 'Teaching is not just a profession — it is a calling. Every student\'s breakthrough is a personal joy.' },
  { icon: <FaStar />, title: 'Student-First Approach', desc: 'Your goals drive every lesson. No rigid curriculum — just a learning journey tailored to you.' },
  { icon: <FaBookOpen />, title: 'Textual Authority', desc: 'Expertise spans Bhagavad Gita, Upanishads, Ramayana, Vedas, and classical Sanskrit literature.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-50" />
        <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-saffron-100/30 translate-x-1/3 -translate-y-1/3" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-saffron-500 mb-4">
                <span className="w-6 h-px bg-saffron-500" />
                Meet Your Teacher
              </span>
              <h1 className="heading-cinzel text-4xl md:text-5xl font-bold text-maroon-900 leading-tight mb-4">
                Pt. Ravi Sharma
              </h1>
              <p className="text-gold-600 font-medium text-lg mb-6">
                MA Sanskrit, BHU · 8+ Years of Teaching
              </p>
              <p className="text-maroon-700/70 leading-relaxed mb-6">
                Born and raised in the holy city of Varanasi, Pt. Ravi Sharma grew up immersed in Sanskrit scripture, Vedic chanting, and classical Indian philosophy. After completing his Master&apos;s in Sanskrit from Banaras Hindu University, he dedicated himself to making this ancient language accessible to students everywhere — from Bangalore to Boston.
              </p>
              <p className="text-maroon-700/70 leading-relaxed mb-8">
                His teaching style blends traditional gurukul wisdom with modern, learner-centric pedagogy. He believes that Sanskrit is not a dead language — it is a living, breathing gateway to one of humanity&apos;s greatest intellectual traditions.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/one-on-one" size="lg">
                  Learn with Pt. Ravi
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Get in Touch
                </Button>
              </div>
            </div>

            {/* Avatar Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Avatar placeholder */}
                <div className="w-72 h-80 rounded-3xl bg-gradient-to-br from-saffron-100 to-gold-100 border-4 border-white shadow-gold flex flex-col items-center justify-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-saffron-gradient flex items-center justify-center text-white text-4xl font-bold heading-cinzel shadow-saffron">
                    RS
                  </div>
                  <div className="text-center px-6">
                    <p className="heading-cinzel text-lg font-bold text-maroon-900">Pt. Ravi Sharma</p>
                    <p className="text-sm text-saffron-600 font-medium mt-1">Sanskrit Acharya</p>
                    <p className="text-xs text-maroon-600/60 mt-2">Varanasi, India</p>
                  </div>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <span key={i} className="text-amber-400 text-sm">★</span>)}
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -left-8 top-12 bg-white rounded-2xl shadow-card p-3 border border-amber-100 text-center">
                  <p className="heading-cinzel text-xl font-bold gradient-text">200+</p>
                  <p className="text-xs text-maroon-600/60">Students</p>
                </div>
                <div className="absolute -right-8 bottom-16 bg-white rounded-2xl shadow-card p-3 border border-amber-100 text-center">
                  <p className="heading-cinzel text-xl font-bold gradient-text">8+</p>
                  <p className="text-xs text-maroon-600/60">Years Exp.</p>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-saffron-gradient text-white rounded-2xl shadow-saffron px-4 py-2 text-xs font-semibold whitespace-nowrap">
                  ✨ 15+ Countries Reached
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Journey"
            title="Experience &"
            highlight="Qualifications"
            subtitle="A teaching career rooted in tradition and powered by passion."
          />
          <div className="relative">
            {/* Line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-saffron-300 to-transparent" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 items-start pl-2">
                  <div className="relative">
                    <div className="w-9 h-9 rounded-full bg-saffron-gradient flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-saffron z-10 relative">
                      {i + 1}
                    </div>
                  </div>
                  <div className="flex-1 pb-8">
                    <span className="text-xs font-bold text-saffron-500 tracking-widest mb-1 block">
                      {item.year}
                    </span>
                    <p className="text-maroon-800 font-medium">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-maroon-900 relative overflow-hidden">
        <span className="absolute right-8 top-1/2 -translate-y-1/2 text-white/5 text-[16rem] font-serif">ॐ</span>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-saffron-400 mb-4">
            Teaching Philosophy
          </span>
          <blockquote className="heading-cinzel text-2xl md:text-3xl font-bold text-white leading-relaxed mb-6">
            &ldquo;Sanskrit is not merely a language to be learned — it is a way of seeing. When you understand Sanskrit, you begin to see the universe as the ancient sages did.&rdquo;
          </blockquote>
          <p className="text-amber-200/60 text-base">— Pt. Ravi Sharma</p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Choose"
            title="What Makes This"
            highlight="Different"
            subtitle="Not every Sanskrit teacher offers the same level of personalization and expertise."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {qualities.map((q, i) => (
              <div key={i} className="card-base flex gap-5 items-start group">
                <div className="w-12 h-12 rounded-2xl bg-saffron-50 flex items-center justify-center text-saffron-500 text-xl shrink-0 group-hover:bg-saffron-500 group-hover:text-white transition-all duration-300">
                  {q.icon}
                </div>
                <div>
                  <h3 className="heading-cinzel text-base font-bold text-maroon-900 mb-2">{q.title}</h3>
                  <p className="text-sm text-maroon-700/70 leading-relaxed">{q.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <FaCheckCircle className="text-saffron-500 text-xl" />
            <p className="text-maroon-700/70 text-base text-center">
              <strong className="text-maroon-900">Free introductory session</strong> — come with your questions and leave with a clear learning plan.
            </p>
            <Button href="/contact" size="md">
              Book Free Session
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
