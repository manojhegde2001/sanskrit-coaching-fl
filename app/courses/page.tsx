'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/sections/CTABanner';
import { courses } from '@/lib/mockData';
import { FaWhatsapp, FaCheckCircle, FaClock, FaLaptop, FaRupeeSign } from 'react-icons/fa';

const WA_LINK =
  'https://wa.me/919482111881?text=Hello%2C%20I%27m%20interested%20in%20Sanskrit%20classes.%20I%20would%20like%20to%20book%20a%20free%20demo%20session.';

export default function CoursesPage() {
  return (
    <main className="bg-cream page-container min-h-screen">
      {/* Page Header */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            eyebrow="All Programs"
            title="Learning"
            highlight="Programs"
            subtitle="One-on-one personalized sessions for school students (Grade 1–12) and adults. All levels welcome."
            align="center"
          />
        </div>
      </section>

      {/* Course Grid */}
      <section className="pb-16 bg-white rounded-t-[3rem] shadow-2xl relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="group flex flex-col bg-cream rounded-[2rem] border border-amber-100 hover:border-amber-200 hover:shadow-2xl hover:shadow-saffron-500/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Icon Header */}
                <div className="bg-gradient-to-br from-saffron-50 to-amber-50 px-8 py-7 flex items-center justify-between border-b border-amber-100">
                  <span className="text-5xl">{course.icon}</span>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-1 text-2xl font-bold text-maroon-900 heading-cinzel">
                      <FaRupeeSign className="text-base text-saffron-600" />
                      <span>{course.price.replace('₹', '').replace(' / hour', '')}</span>
                    </div>
                    <p className="text-[10px] text-maroon-600/50 font-bold uppercase tracking-widest">per hour</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  {/* Badge */}
                  <span className={`self-start text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${
                    course.level === 'Advanced'
                      ? 'bg-rose-100 text-rose-700'
                      : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {course.level}
                  </span>

                  <h2 className="heading-cinzel text-lg font-bold text-maroon-900 mb-3 leading-snug">
                    {course.title}
                  </h2>
                  <p className="text-sm text-maroon-700/65 leading-relaxed mb-5">
                    {course.description}
                  </p>

                  {/* Topics */}
                  <ul className="space-y-1.5 mb-6">
                    {course.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2 text-sm text-maroon-800 font-medium">
                        <FaCheckCircle className="text-saffron-500 shrink-0 text-xs" />
                        {topic}
                      </li>
                    ))}
                  </ul>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-[11px] text-maroon-600/55 font-semibold uppercase tracking-wide mt-auto mb-5 pt-4 border-t border-amber-100">
                    <span className="flex items-center gap-1.5">
                      <FaClock className="text-saffron-400" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaLaptop className="text-saffron-400" />
                      Online
                    </span>
                    {course.batchDetails.includes('Grade') && (
                      <span className="flex items-center gap-1.5">
                        🎒 {course.batchDetails.split('|')[0].trim()}
                      </span>
                    )}
                  </div>

                  <Button
                    href={`${WA_LINK}&course=${encodeURIComponent(course.title)}`}
                    variant="secondary"
                    fullWidth
                    className="rounded-xl"
                  >
                    <FaWhatsapp className="text-base" />
                    Enquire on WhatsApp
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Summary */}
          <div className="mt-14 bg-maroon-900 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 pattern-bg opacity-10" />
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="heading-cinzel text-2xl font-bold text-white mb-2">Fee Summary</h3>
                  <p className="text-amber-200/60 text-sm">All sessions are 1 hour · Online only · One-on-one</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                  {[
                    { label: 'Basic Sanskrit', price: '₹450' },
                    { label: 'Advanced Sanskrit', price: '₹600' },
                    { label: 'Shlokas', price: '₹400' },
                    { label: 'CBSE Sanskrit', price: '₹500' },
                    { label: 'State Board Sanskrit', price: '₹500' },
                    { label: 'CBSE Kannada', price: '₹500' },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/10 rounded-2xl px-4 py-3 border border-white/10">
                      <p className="heading-cinzel text-lg font-bold text-saffron-400">{item.price}</p>
                      <p className="text-[10px] text-amber-200/60 font-semibold uppercase tracking-wider mt-0.5">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="rounded-2xl border-white/20 hover:bg-white/10"
                >
                  Book Free Demo Session
                </Button>
                <Button
                  href={WA_LINK}
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/10"
                >
                  <FaWhatsapp className="text-lg" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
