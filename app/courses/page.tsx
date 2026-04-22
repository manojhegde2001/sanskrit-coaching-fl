'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/sections/CTABanner';
import { courses } from '@/lib/mockData';
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa';

const WA_LINK =
  'https://wa.me/919482111881?text=Hello%2C%20I%27m%20interested%20in%20Sanskrit%20classes.%20I%20would%20like%20to%20book%20a%20free%20demo%20session.';

const programDetails: Record<string, string[]> = {
  'personalized-sanskrit': [
    'Fully flexible sessions',
    'Customized learning plan',
    'Suitable for all levels',
  ],
  'academic-support': [
    'Structured sessions',
    'Exam-focused learning',
    'Better scores and clarity',
  ],
  'shlokas-scriptures': [
    'Correct pronunciation',
    'Meaning & significance',
    'Deeper understanding',
  ],
};

export default function CoursesPage() {
  return (
    <main className="bg-cream page-container min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            eyebrow="Our Offerings"
            title="Learning"
            highlight="Programs"
            subtitle="One-on-one personalized sessions tailored to your learning goals, pace, and background."
            align="center"
          />
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-12 bg-white rounded-t-[3rem] shadow-2xl relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="group flex flex-col md:flex-row gap-8 bg-cream rounded-[2rem] border border-amber-100 p-8 hover:shadow-xl hover:border-amber-200 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex md:flex-col items-center md:items-start gap-4">
                  <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-saffron-50 to-amber-50 border border-amber-100 flex items-center justify-center text-4xl shadow-sm shrink-0">
                    {course.icon}
                  </div>
                  <div className="md:hidden">
                    <span className="text-xs font-bold text-saffron-500 uppercase tracking-widest">
                      Program {index + 1}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="hidden md:block mb-1">
                    <span className="text-xs font-bold text-saffron-500 uppercase tracking-widest">
                      Program {index + 1}
                    </span>
                  </div>
                  <h2 className="heading-cinzel text-2xl font-bold text-maroon-900 mb-3">
                    {course.title}
                  </h2>
                  <p className="text-maroon-700/70 leading-relaxed mb-5">
                    {course.description}
                  </p>

                  {/* Highlights */}
                  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
                    {(programDetails[course.id] ?? []).map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-maroon-800 font-medium">
                        <FaCheckCircle className="text-saffron-500 shrink-0 text-xs" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Meta + CTA */}
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-3 text-[11px] text-maroon-600/60 font-semibold uppercase tracking-wider">
                      <span className="px-3 py-1.5 bg-white rounded-full border border-amber-100">
                        Mode: Online
                      </span>
                      <span className="px-3 py-1.5 bg-white rounded-full border border-amber-100">
                        Duration: {course.duration}
                      </span>
                      <span className="px-3 py-1.5 bg-white rounded-full border border-amber-100">
                        Pricing: Contact for details
                      </span>
                    </div>
                    <Button
                      href={WA_LINK}
                      variant="primary"
                      size="sm"
                      className="rounded-xl ml-auto shrink-0"
                    >
                      <FaWhatsapp className="text-base" />
                      Enquire on WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing note */}
          <div className="mt-12 p-8 bg-maroon-900 rounded-[2.5rem] shadow-2xl relative overflow-hidden text-center">
            <div className="absolute left-0 top-0 w-full h-full pattern-bg opacity-10" />
            <div className="relative z-10">
              <h4 className="heading-cinzel text-2xl font-bold text-white mb-2">Not sure which program to choose?</h4>
              <p className="text-amber-200/60 text-sm mb-6">
                Book a free 15-minute demo session and Prasanna Sir will guide you to the right program.
              </p>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="rounded-2xl border-white/20 hover:bg-white/10"
              >
                Book Free Demo Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
