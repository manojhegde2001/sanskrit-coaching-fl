'use client';

import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/sections/CTABanner';
import { FaGraduationCap, FaStar, FaBookOpen, FaHeart, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';

const WA_LINK =
  'https://wa.me/919482111881?text=Hello%2C%20I%27m%20interested%20in%20Sanskrit%20classes.%20I%20would%20like%20to%20book%20a%20free%20demo%20session.';

const qualifications = [
  {
    icon: <FaGraduationCap />,
    title: 'M.A (Acharya) in Sanskrit',
    desc: 'A postgraduate degree with deep mastery of classical Sanskrit grammar, literature, and Vedic studies.',
  },
  {
    icon: <FaBookOpen />,
    title: 'B.Ed (Shiksha-sastri) in Sanskrit',
    desc: 'Specialized teacher training with a focus on Sanskrit pedagogy and academic instruction.',
  },
  {
    icon: <FaStar />,
    title: '5+ Years Teaching Experience',
    desc: 'Over five years of dedicated experience guiding students from complete beginners to advanced levels.',
  },
  {
    icon: <FaHeart />,
    title: 'Teaching is My Passion',
    desc: 'Not just a profession — teaching Sanskrit is a calling. Every student gets genuine personal attention and care.',
  },
];

const targetAudience = [
  { icon: '🎒', label: 'School Students', desc: 'Grade 5 to 12 — CBSE, State Board, and beyond.' },
  { icon: '👨‍💼', label: 'Adults', desc: 'Working professionals, homemakers, and spiritual seekers.' },
  { icon: '🌱', label: 'Beginners', desc: 'No prior Sanskrit knowledge required to get started.' },
  { icon: '🏆', label: 'Advanced Learners', desc: 'Deepen grammar, scripture study, or academic excellence.' },
];

const teachingLanguages = ['English', 'Sanskrit', 'Telugu', 'Kannada'];

export default function AboutContent() {
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
            subtitle="Personalized Sanskrit and Kannada learning — rooted in tradition, tailored to you."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-12">
            {/* Image */}
            <div className="relative group animate-fade-in order-2 lg:order-1 max-w-md mx-auto lg:mx-0 w-full">
              <div className="absolute -inset-4 bg-maroon-900/5 rounded-[3rem] -rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-500" />
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src="/image.png"
                  alt="Sanatanadhara — Sanskrit Instructor"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badges */}
              <div className="absolute -left-6 top-10 bg-white rounded-2xl shadow-xl p-4 border border-amber-100 text-center animate-fade-up">
                <p className="heading-cinzel text-2xl font-bold gradient-text">1:1</p>
                <p className="text-[10px] text-maroon-600/60 font-bold uppercase tracking-widest">Sessions</p>
              </div>
              <div className="absolute -right-6 bottom-20 bg-white rounded-2xl shadow-xl p-4 border border-amber-100 text-center animate-fade-up delay-100">
                <p className="heading-cinzel text-2xl font-bold gradient-text">5+</p>
                <p className="text-[10px] text-maroon-600/60 font-bold uppercase tracking-widest">Years Exp.</p>
              </div>
            </div>

            {/* Info */}
            <div className="animate-fade-up order-1 lg:order-2">
              {/* Tagline */}
              <div className="inline-block bg-saffron-50 border border-saffron-200 px-4 py-2 rounded-full mb-6">
                <p className="text-saffron-700 text-xs font-bold uppercase tracking-widest">
                  ✨ Nurturing Wisdom Through Personalized Learning
                </p>
              </div>

              <h2 className="heading-cinzel text-3xl font-bold text-maroon-900 mb-2">
                Teaching Style
              </h2>
              <p className="text-saffron-600 font-bold tracking-widest uppercase text-xs mb-6">
                Simple · Personal · Effective
              </p>

              <p className="text-maroon-700/80 leading-relaxed mb-5 text-lg">
                At Sanatanadhara, teaching Sanskrit is not just a job — it is a passion. Every student receives genuine attention and a learning path built around their goals, pace, and background.
              </p>

              <p className="text-maroon-700/70 mb-8 leading-relaxed">
                Sessions are conducted in whichever language makes you most comfortable — English, Sanskrit, Telugu, or Kannada — making learning truly accessible for every student.
              </p>

              {/* Teaching languages */}
              <div className="mb-8">
                <p className="text-[10px] text-maroon-600/50 uppercase font-bold tracking-widest mb-3">
                  Teaching Languages
                </p>
                <div className="flex flex-wrap gap-2">
                  {teachingLanguages.map((lang) => (
                    <span
                      key={lang}
                      className="px-4 py-1.5 bg-white rounded-full border border-amber-100 text-sm font-bold text-maroon-900 shadow-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mode info */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="p-4 bg-white rounded-2xl border border-amber-50 shadow-sm">
                  <p className="text-[10px] text-maroon-600/50 uppercase font-bold tracking-widest mb-1">Teaching Mode</p>
                  <p className="text-sm font-bold text-maroon-900">Online Only (1:1)</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-amber-50 shadow-sm">
                  <p className="text-[10px] text-maroon-600/50 uppercase font-bold tracking-widest mb-1">Students</p>
                  <p className="text-sm font-bold text-maroon-900">Grade 5–12 & Adults</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button href="/contact" size="lg" className="rounded-2xl">
                  Book Free Demo Session
                </Button>
                <Button href={WA_LINK} variant="secondary" size="lg" className="rounded-2xl">
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
            &ldquo;Teaching Sanskrit is my passion. Every student deserves simple explanations, strong foundational knowledge, and personalized attention.&rdquo;
          </blockquote>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-amber-200/60 font-semibold tracking-widest uppercase text-sm">— Sanatanadhara</p>
        </div>
      </section>

      {/* Qualifications */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Credentials"
            title="Experience &"
            highlight="Qualifications"
            subtitle="Academic excellence combined with a genuine passion for teaching."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
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

      {/* Who We Teach */}
      <section className="section-padding bg-cream relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-30" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            eyebrow="Target Audience"
            title="Who Can"
            highlight="Join?"
            subtitle="Sanatanadhara welcomes everyone school students and adults, beginners and advanced learners."
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {targetAudience.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center bg-white rounded-3xl p-7 border border-amber-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="text-4xl mb-4">{item.icon}</span>
                <h3 className="heading-cinzel text-base font-bold text-maroon-900 mb-2">{item.label}</h3>
                <p className="text-xs text-maroon-700/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-white rounded-3xl border border-amber-100 shadow-sm text-center">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-maroon-800 font-medium">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-saffron-500" /> Grade 5 to 12 school students
              </span>
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-saffron-500" /> Adults of all backgrounds
              </span>
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-saffron-500" /> Beginners to Advanced
              </span>
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-saffron-500" /> All timezones · Online
              </span>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
