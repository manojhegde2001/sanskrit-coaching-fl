import { testimonials } from '@/lib/mockData';
import { TestimonialCard } from '@/components/ui/Card';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Testimonials() {
  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-bg opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Student Stories"
          title="Words from Our"
          highlight="Learners"
          subtitle="Hear from students across the world who have transformed their relationship with Sanskrit."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.id}
              name={t.name}
              location={t.location}
              rating={t.rating}
              text={t.text}
              avatar={t.avatar}
              course={t.course}
            />
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {[
            { value: '100+', label: 'Sessions Conducted' },
            { value: '5★', label: 'Average Rating' },
            { value: '5+', label: 'Years of Teaching' },
            { value: '1:1', label: 'Personalized Focus' },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center px-6 py-4 bg-white rounded-2xl border border-amber-100 shadow-card"
            >
              <p className="heading-cinzel text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs text-maroon-600/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
