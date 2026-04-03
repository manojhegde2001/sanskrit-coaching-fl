import SectionHeader from '@/components/ui/SectionHeader';
import { FaBookOpen, FaBrain, FaPrayingHands, FaGraduationCap } from 'react-icons/fa';
import { GiLotus } from 'react-icons/gi';
import { MdTempleHindu } from 'react-icons/md';

const reasons = [
  {
    icon: <FaBookOpen />,
    title: 'Understand Ancient Wisdom',
    description: 'Read the Bhagavad Gita, Upanishads, and Vedas in their original form — without translation filters.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: <GiLotus />,
    title: 'Deepen Yoga Practice',
    description: 'Understand every Sanskrit term used in yoga, pranayama, and meditation for a richer spiritual experience.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: <MdTempleHindu />,
    title: 'Connect with Heritage',
    description: 'Reconnect with your cultural and spiritual roots. Perfect for NRIs and diaspora communities worldwide.',
    color: 'bg-orange-50 text-orange-500',
  },
  {
    icon: <FaBrain />,
    title: 'Enhance Cognitive Skills',
    description: 'Sanskrit is a highly structured language proven to enhance memory, focus, and analytical thinking.',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: <FaPrayingHands />,
    title: 'Chant with Meaning',
    description: 'Move beyond rote chanting. Understand every word of the mantras and slokas you recite daily.',
    color: 'bg-rose-50 text-rose-500',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Academic Excellence',
    description: 'Sanskrit is increasingly valued in linguistics, philosophy, and comparative religion globally.',
    color: 'bg-sky-50 text-sky-600',
  },
];

export default function WhyLearnSanskrit() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Sanskrit?"
          title="The Language of"
          highlight="Eternal Wisdom"
          subtitle="Sanskrit is not just a language — it's a gateway to India's profound philosophical, spiritual, and scientific heritage."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group flex gap-4 p-6 rounded-2xl border border-amber-100 hover:border-amber-200 hover:shadow-card transition-all duration-300 bg-white"
            >
              <div
                className={`w-12 h-12 rounded-xl ${reason.color} flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform duration-300`}
              >
                {reason.icon}
              </div>
              <div>
                <h3 className="heading-cinzel text-base font-bold text-maroon-900 mb-1.5">
                  {reason.title}
                </h3>
                <p className="text-sm text-maroon-700/65 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
