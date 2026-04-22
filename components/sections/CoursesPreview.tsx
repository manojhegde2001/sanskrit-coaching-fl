'use client';

import { courses } from '@/lib/mockData';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';

const WA_LINK =
  'https://wa.me/919482111881?text=Hello%2C%20I%27m%20interested%20in%20Sanskrit%20classes.%20I%20would%20like%20to%20book%20a%20free%20demo%20session.';

const programIcons = ['📜', '🎓', '🎼'];
const programHighlights: Record<string, string[]> = {
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

export default function CoursesPreview() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-96 h-96 bg-maroon-900/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <SectionHeader
              eyebrow="Our Offerings"
              title="Our Learning"
              highlight="Programs"
              subtitle="Explore our flexible one-on-one sessions tailored to your goals and background."
              align="left"
            />
          </div>
          <div className="shrink-0">
            <Button variant="secondary" href="/courses" size="lg" className="rounded-2xl">
              View All Programs <FaArrowRight className="text-xs ml-2" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col bg-white rounded-[2rem] border border-amber-100 shadow-sm hover:shadow-2xl hover:shadow-saffron-500/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Icon header */}
              <div className="bg-gradient-to-br from-saffron-50 to-amber-50 p-8 flex items-center justify-center border-b border-amber-100">
                <span className="text-6xl">{course.icon}</span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="heading-cinzel text-lg font-bold text-maroon-900 mb-3 leading-snug">
                  {course.title}
                </h3>
                <p className="text-sm text-maroon-700/65 leading-relaxed mb-5">
                  {course.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-6">
                  {(programHighlights[course.id] ?? []).map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-maroon-800 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-saffron-500 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Meta */}
                <div className="flex items-center gap-3 text-[11px] text-maroon-600/60 font-semibold uppercase tracking-wider mb-6 pt-4 border-t border-amber-50">
                  <span>Mode: Online</span>
                  <span>·</span>
                  <span>Duration: {course.duration}</span>
                </div>

                <div className="mt-auto">
                  <Button
                    href={WA_LINK}
                    variant="secondary"
                    fullWidth
                    className="rounded-xl"
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
        <p className="text-center text-sm text-maroon-600/50 mt-8">
          Pricing is discussed after the free demo session based on your requirements.{' '}
          <a href="/contact" className="text-saffron-600 font-semibold hover:underline">
            Contact us
          </a>{' '}
          for details.
        </p>
      </div>
    </section>
  );
}
