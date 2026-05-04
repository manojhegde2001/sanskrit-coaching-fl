'use client';

import { useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import CTABanner from '@/components/sections/CTABanner';
import { FaBookOpen, FaClock, FaUserGraduate, FaChartLine, FaLayerGroup, FaHeart, FaArrowRight, FaCheckCircle, FaVideo, FaCalendarAlt, FaComments } from 'react-icons/fa';

const steps = [
  {
    number: '01',
    icon: <FaCalendarAlt />,
    title: 'Book Your Free Intro Session',
    description: 'Fill out a brief form or WhatsApp us directly. We\'ll schedule a 30-minute free consultation at a time that suits you — any timezone.',
  },
  {
    number: '02',
    icon: <FaComments />,
    title: 'Goal Assessment Meeting',
    description: 'We discuss your background, goals, and availability. Together, we design your personalized Sanskrit learning roadmap.',
  },
  {
    number: '03',
    icon: <FaVideo />,
    title: 'Begin Live Sessions',
    description: 'Start your 1-on-1 sessions via Zoom or Google Meet. Sessions are recorded for revision. Materials are shared digitally.',
  },
  {
    number: '04',
    icon: <FaChartLine />,
    title: 'Progress & Growth',
    description: 'Regular milestone assessments, Q&A sessions, and curriculum adjustments ensure you\'re always growing confidently.',
  },
];

const benefits = [
  { icon: <FaBookOpen />, title: 'Custom Syllabus', description: 'Your curriculum is built entirely around your goals — Gita, Vedas, grammar, yoga texts, or Vedic chanting.' },
  { icon: <FaClock />, title: 'Flexible Timing', description: 'Morning, evening, or weekends — sessions are scheduled around your life, not a fixed timetable.' },
  { icon: <FaUserGraduate />, title: 'Direct Mentorship', description: 'Every session is live and interactive. Your questions get answered immediately, not on a forum.' },
  { icon: <FaChartLine />, title: 'Progress Tracking', description: 'Clear milestones, detailed feedback, and regular reviews so you always know how far you\'ve come.' },
  { icon: <FaLayerGroup />, title: 'Digital Resources', description: 'Curated PDFs, audio recordings of slokas, vocabulary worksheets, and notes tailored to your syllabus.' },
  { icon: <FaHeart />, title: 'Lifetime Support', description: 'Your learning journey doesn\'t end with sessions. Access doubt-clearing and community support beyond your course.' },
];

const idealFor = [
  {
    emoji: '💼',
    title: 'Working Professionals',
    points: ['Busy schedules accommodated', 'Weekend and evening slots available', 'Learn at your own pace'],
  },
  {
    emoji: '✈️',
    title: 'NRIs & Diaspora',
    points: ['All timezones supported', 'Reconnect with cultural roots', 'No travel required'],
  },
  {
    emoji: '📿',
    title: 'Spiritual Seekers',
    points: ['Bhagavad Gita deep-dive', 'Mantra and sloka understanding', 'Vedic philosophy context'],
  },
  {
    emoji: '🎓',
    title: 'Serious Learners',
    points: ['Academic rigour available', 'Paninian grammar if desired', 'Full classical Sanskrit path'],
  },
];

export default function OneOnOneContent() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-50" />
        <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-saffron-100/25 translate-x-1/3 -translate-y-1/4" />
        <span className="absolute left-8 bottom-8 text-[14rem] text-saffron-100 font-serif pointer-events-none select-none opacity-50">ॐ</span>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-saffron-500 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              ⭐ Primary Service — Most Popular
            </span>
            <h1 className="heading-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-maroon-900 leading-tight mb-6">
              One-on-One{' '}
              <span className="gradient-text">Personalized</span>{' '}
              Sanskrit Learning
            </h1>
            <p className="text-lg text-maroon-700/70 leading-relaxed mb-8">
              The most effective way to learn Sanskrit — a completely personalized learning journey designed exclusively around your goals, your pace, and your schedule. No batch timings. No generic textbooks. Just you, your teacher, and your Sanskrit dream.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => setModalOpen(true)}>
                Book Free Intro Session <FaArrowRight />
              </Button>
              <Button variant="secondary" size="lg" href="/how-it-works">
                How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Process"
            title="How It"
            highlight="Works"
            subtitle="From your first free session to mastery — a clear, guided path."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center group">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-saffron-200 to-transparent z-0" />
                )}
                <div className="relative z-10">
                  <div className="relative mx-auto w-20 h-20 mb-5">
                    <div className="w-20 h-20 rounded-full bg-saffron-50 border-2 border-saffron-200 flex items-center justify-center text-saffron-500 text-2xl group-hover:bg-saffron-500 group-hover:text-white group-hover:border-saffron-500 transition-all duration-300">
                      {step.icon}
                    </div>
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-saffron-gradient text-white text-xs font-bold flex items-center justify-center shadow-saffron">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="heading-cinzel text-base font-bold text-maroon-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-maroon-700/65 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why 1-on-1"
            title="The Benefits of"
            highlight="Personalized Learning"
            subtitle="Discover why hundreds of students choose one-on-one coaching over group courses."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="card-base group flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-saffron-50 flex items-center justify-center text-saffron-500 text-xl shrink-0 group-hover:bg-saffron-500 group-hover:text-white transition-all duration-300">
                  {b.icon}
                </div>
                <div>
                  <h3 className="heading-cinzel text-sm font-bold text-maroon-900 mb-1.5">{b.title}</h3>
                  <p className="text-sm text-maroon-700/65 leading-relaxed">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="section-padding bg-maroon-900 relative overflow-hidden">
        <span className="absolute right-8 top-1/2 -translate-y-1/2 text-white/5 text-[18rem] font-serif pointer-events-none select-none">ॐ</span>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Perfect For"
            title="Who Is This"
            highlight="Designed For?"
            dark
            subtitle="Personalized learning adapts to your life — whoever you are, wherever you are."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {idealFor.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-saffron-400/30 transition-all duration-300"
              >
                <span className="text-4xl mb-4 block">{item.emoji}</span>
                <h3 className="heading-cinzel text-base font-bold text-white mb-3">{item.title}</h3>
                <ul className="space-y-2">
                  {item.points.map((pt, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-amber-200/60">
                      <FaCheckCircle className="text-saffron-400 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <p className="text-amber-200/60 text-base mb-6">Ready to start? Your first session is completely free.</p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setModalOpen(true)}
              className="border-white/70 text-white hover:bg-white hover:text-saffron-600"
            >
              Book Free Session <FaArrowRight />
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} type="booking" />
    </>
  );
}
