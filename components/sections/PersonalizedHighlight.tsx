'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import {
  FaBookOpen, FaClock, FaUserGraduate, FaChartLine, FaLayerGroup, FaHeart, FaArrowRight, FaCheckCircle,
} from 'react-icons/fa';

const benefits = [
  { icon: <FaBookOpen />, title: 'Custom Syllabus', description: 'Built around your goals — Gita, Vedas, grammar, or yoga texts.' },
  { icon: <FaClock />, title: 'Flexible Timing', description: 'Schedule sessions at your convenience across any timezone.' },
  { icon: <FaUserGraduate />, title: 'Direct Mentorship', description: 'Every session is live, interactive, and personally guided by an expert.' },
  { icon: <FaChartLine />, title: 'Track Progress', description: 'Regular milestones and detailed feedback ensure steady growth.' },
  { icon: <FaLayerGroup />, title: 'Learning Resources', description: 'Curated PDFs, audio recordings, and digital worksheets — always accessible.' },
  { icon: <FaHeart />, title: 'Lifetime Support', description: 'Post-course doubt-clearing sessions and access to our learning community.' },
];

const idealFor = [
  { emoji: '💼', label: 'Working Professionals', desc: 'Sessions around your work schedule — mornings, evenings, or weekends.' },
  { emoji: '✈️', label: 'NRIs & Diaspora', desc: 'Reconnect with your heritage from anywhere in the world.' },
  { emoji: '📿', label: 'Spiritual Seekers', desc: 'Delve into sacred texts, mantras, and the philosophy of yoga.' },
  { emoji: '🎓', label: 'Serious Learners', desc: 'If you want depth, rigour, and real mastery — this is your path.' },
];

export default function PersonalizedHighlight() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="section-padding bg-cream relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-saffron-50/50 to-transparent" />
        <div className="absolute bottom-4 right-8 text-[12rem] opacity-[0.03] font-serif select-none pointer-events-none">
          ॐ
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 mb-14">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-saffron-500 mb-3">
                <span className="w-6 h-px bg-saffron-500" />
                Primary Service
                <span className="w-6 h-px bg-saffron-500" />
              </span>
              <h2 className="heading-cinzel text-3xl md:text-4xl font-bold text-maroon-900 leading-tight">
                One-on-One{' '}
                <span className="gradient-text">Personalized Learning</span>
              </h2>
              <div className="gold-divider mt-4 mb-5" />
              <p className="text-base text-maroon-700/70 leading-relaxed max-w-xl">
                Our signature offering — a completely personalized Sanskrit learning journey designed exclusively around <em>your</em> goals, pace, and schedule.
              </p>
            </div>
            <div className="shrink-0">
              <Button size="lg" onClick={() => setModalOpen(true)}>
                Book Free Intro Session
                <FaArrowRight />
              </Button>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="group flex gap-4 p-5 bg-white rounded-2xl border border-amber-100 hover:border-saffron-200 hover:shadow-card transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-saffron-50 flex items-center justify-center text-saffron-500 text-lg shrink-0 group-hover:bg-saffron-500 group-hover:text-white transition-all duration-300">
                  {b.icon}
                </div>
                <div>
                  <h3 className="heading-cinzel text-sm font-bold text-maroon-900 mb-1">
                    {b.title}
                  </h3>
                  <p className="text-xs text-maroon-700/65 leading-relaxed">{b.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Ideal For */}
          <div className="bg-maroon-900 rounded-3xl p-8 lg:p-12">
            <h3 className="heading-cinzel text-2xl font-bold text-white text-center mb-2">
              Who Is This <span className="text-saffron-400">Ideal For?</span>
            </h3>
            <p className="text-amber-200/60 text-center text-sm mb-8">
              One-on-one coaching works for everyone — here are some people who love it most.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {idealFor.map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-saffron-400/30 transition-all duration-300"
                >
                  <span className="text-3xl">{item.emoji}</span>
                  <h4 className="heading-cinzel text-sm font-bold text-white mt-3 mb-1.5">
                    {item.label}
                  </h4>
                  <p className="text-xs text-amber-200/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <div className="inline-flex items-center gap-2 text-xs text-amber-200/50">
                <FaCheckCircle className="text-saffron-400" />
                No prior Sanskrit knowledge required
                <FaCheckCircle className="text-saffron-400 ml-3" />
                All timezones supported
                <FaCheckCircle className="text-saffron-400 ml-3" />
                First session completely free
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} type="booking" />
    </>
  );
}
