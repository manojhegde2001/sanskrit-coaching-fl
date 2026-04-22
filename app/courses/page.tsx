'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/sections/CTABanner';
import { courses } from '@/lib/mockData';
import { FaWhatsapp, FaCheckCircle, FaClock, FaLaptop, FaRupeeSign, FaUserFriends, FaGraduationCap, FaOm } from 'react-icons/fa';

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
            eyebrow="Our Offerings"
            title="Learning"
            highlight="Programs"
            subtitle="Personalized Sanskrit and Kannada coaching tailored to your needs. Choose from flexible 1:1 sessions or structured academic support."
            align="center"
          />
        </div>
      </section>

      {/* Categories Info */}
      <section className="pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: <FaUserFriends />, label: '1:1 Personalized', desc: 'Fully flexible, custom pace' },
            { icon: <FaGraduationCap />, label: 'Academic Support', desc: 'CBSE & State Board focus' },
            { icon: <FaOm />, label: 'Scriptures', desc: 'Shlokas & Vedic literature' },
          ].map((cat) => (
            <div key={cat.label} className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-amber-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-saffron-50 flex items-center justify-center text-saffron-600">
                {cat.icon}
              </div>
              <div>
                <p className="text-xs font-bold text-maroon-900">{cat.label}</p>
                <p className="text-[10px] text-maroon-600/50 uppercase font-bold tracking-wider">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Course Grid */}
      <section className="pb-20 bg-white rounded-t-[3rem] shadow-2xl relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="group flex flex-col bg-cream rounded-[2rem] border border-amber-100 hover:border-amber-200 hover:shadow-2xl hover:shadow-saffron-500/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Icon Header */}
                <div className="bg-gradient-to-br from-saffron-50 to-amber-50 px-8 py-7 flex items-center justify-between border-b border-amber-100">
                  <span className="text-5xl transform group-hover:scale-110 transition-transform duration-500">{course.icon}</span>
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
                  {/* Category Badge */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                      course.category === 'Academic'
                        ? 'bg-blue-100 text-blue-700'
                        : course.category === 'Scriptures'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-emerald-100 text-emerald-700'
                    }`}>
                      {course.category}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-maroon-50 text-maroon-700">
                      {course.level}
                    </span>
                  </div>

                  <h2 className="heading-cinzel text-lg font-bold text-maroon-900 mb-3 leading-snug">
                    {course.title}
                  </h2>
                  <p className="text-sm text-maroon-700/65 leading-relaxed mb-5 min-h-[4.5rem]">
                    {course.description}
                  </p>

                  {/* Topics */}
                  <ul className="space-y-2 mb-8">
                    {course.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2.5 text-sm text-maroon-800 font-medium leading-tight">
                        <FaCheckCircle className="text-saffron-500 shrink-0 text-xs mt-0.5" />
                        {topic}
                      </li>
                    ))}
                  </ul>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-[11px] text-maroon-600/55 font-semibold uppercase tracking-wide mt-auto mb-6 pt-4 border-t border-amber-100">
                    <span className="flex items-center gap-1.5">
                      <FaClock className="text-saffron-400" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaLaptop className="text-saffron-400" />
                      Online
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaUserFriends className="text-saffron-400" />
                      1:1
                    </span>
                  </div>

                  <Button
                    href={`${WA_LINK}&course=${encodeURIComponent(course.title)}`}
                    variant="secondary"
                    fullWidth
                    className="rounded-xl py-4"
                  >
                    <FaWhatsapp className="text-base" />
                    Enquire on WhatsApp
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Summary */}
          <div className="mt-20 bg-maroon-900 rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 pattern-bg opacity-10" />
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-saffron-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="max-w-md text-center lg:text-left">
                  <h3 className="heading-cinzel text-3xl font-bold text-white mb-4">Fee Summary</h3>
                  <p className="text-amber-200/60 text-lg mb-6">
                    Transparent pricing for premium, personalized learning experiences.
                  </p>
                  <ul className="space-y-3 text-sm text-amber-100/80">
                    <li className="flex items-center gap-2 justify-center lg:justify-start">
                      <FaCheckCircle className="text-saffron-400" /> Free 15-minute demo session
                    </li>
                    <li className="flex items-center gap-2 justify-center lg:justify-start">
                      <FaCheckCircle className="text-saffron-400" /> One-on-one focused attention
                    </li>
                    <li className="flex items-center gap-2 justify-center lg:justify-start">
                      <FaCheckCircle className="text-saffron-400" /> Flexible scheduling
                    </li>
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full lg:w-auto">
                  {[
                    { label: 'Basic Sanskrit', price: '₹450' },
                    { label: 'Advanced Sanskrit', price: '₹600' },
                    { label: 'Shlokas', price: '₹400' },
                    { label: 'CBSE Sanskrit', price: '₹500' },
                    { label: 'State Board', price: '₹500' },
                    { label: 'CBSE Kannada', price: '₹500' },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/5 rounded-2xl p-5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                      <p className="heading-cinzel text-2xl font-bold text-saffron-400">{item.price}</p>
                      <p className="text-[10px] text-amber-200/50 font-bold uppercase tracking-wider mt-1">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-6">
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="rounded-2xl border-white/20 hover:bg-white/10 min-w-[200px]"
                >
                  Book Free Demo
                </Button>
                <Button
                  href={WA_LINK}
                  variant="primary"
                  size="lg"
                  className="rounded-2xl min-w-[200px]"
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
