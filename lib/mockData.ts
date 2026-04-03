import { Course, Testimonial, ProcessStep, Benefit, FAQ } from './types';

export const courses: Course[] = [
  {
    id: 'beginner-sanskrit',
    title: 'Beginner Sanskrit',
    description:
      'Start your Sanskrit journey from scratch. Learn the Devanagari script, basic grammar, and foundational vocabulary to read and understand simple Sanskrit texts.',
    duration: '3 Months',
    level: 'Beginner',
    batchDetails: 'Batches every Monday & Wednesday, 7:00 PM – 8:00 PM IST',
    topics: ['Devanagari Script', 'Basic Grammar', 'Simple Vocabulary', 'Sandhi Rules', 'Short Slokas'],
    price: '₹4,999 / month',
    icon: '🌱',
  },
  {
    id: 'intermediate-sanskrit',
    title: 'Intermediate Sanskrit',
    description:
      'Deepen your understanding with advanced grammar, verb conjugations, and reading longer texts. Bridge your way to reading classical Sanskrit literature.',
    duration: '4 Months',
    level: 'Intermediate',
    batchDetails: 'Batches every Tuesday & Thursday, 6:00 PM – 7:30 PM IST',
    topics: ['Advanced Grammar', 'Verb Conjugations', 'Panini Sutras (intro)', 'Classical Texts', 'Translation Practice'],
    price: '₹6,999 / month',
    icon: '📖',
  },
  {
    id: 'bhagavad-gita',
    title: 'Bhagavad Gita Course',
    description:
      'A comprehensive study of the Bhagavad Gita — verse-by-verse Sanskrit reading, translation, and philosophical commentary rooted in traditional interpretation.',
    duration: '6 Months',
    level: 'Intermediate',
    batchDetails: 'Weekend batches: Saturday & Sunday, 8:00 AM – 9:30 AM IST',
    topics: ['All 18 Chapters', 'Verse-by-verse translation', 'Shankaracharya commentary', 'Philosophy & Context', 'Discussion sessions'],
    price: '₹8,999 / month',
    icon: '🕉️',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya Nair',
    location: 'San Jose, California, USA',
    rating: 5,
    text: 'I always wanted to understand the Bhagavad Gita in its original Sanskrit. Pt. Ravi\'s one-on-one sessions are absolutely transformative. He adapts every lesson to my pace — I never feel rushed or lost.',
    avatar: 'PN',
    course: 'One-on-One Personalized Learning',
  },
  {
    id: 't2',
    name: 'Arjun Mehta',
    location: 'London, UK',
    rating: 5,
    text: 'As a second-generation NRI, learning Sanskrit felt daunting. But from the very first session, the teaching style made it approachable and even joyful. The flexible timing is a big plus for us in the UK!',
    avatar: 'AM',
    course: 'Beginner Sanskrit Course',
  },
  {
    id: 't3',
    name: 'Sunita Krishnamurthy',
    location: 'Bangalore, India',
    rating: 5,
    text: 'The personalized approach is unmatched. My syllabus was built around my interest in Vedic chanting, not a generic textbook. I can now recite the Rudram with full understanding. Highly recommended!',
    avatar: 'SK',
    course: 'One-on-One Personalized Learning',
  },
];

export const howItWorksSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Book a Free Intro Session',
    description: 'Fill out a short form or message us on WhatsApp. We schedule a 30-minute free consultation to understand your goals, background, and availability.',
    icon: '📅',
  },
  {
    id: 2,
    title: 'Personalized Assessment',
    description: 'For one-on-one students, we assess your current level and co-create a custom learning roadmap tailored specifically to your interests and objectives.',
    icon: '🧭',
  },
  {
    id: 3,
    title: 'Begin Your Learning',
    description: 'Start your sessions on Zoom or Google Meet. Classes are recorded and shared with you for revision. Study materials are provided digitally.',
    icon: '🎓',
  },
  {
    id: 4,
    title: 'Track Your Progress',
    description: 'Regular assessments, milestone reviews, and open Q&A sessions ensure you are always growing and motivated on your Sanskrit journey.',
    icon: '📈',
  },
];

export const personalizedBenefits: Benefit[] = [
  {
    id: 'b1',
    title: 'Custom Syllabus',
    description: 'Your curriculum is built around your goals — whether Bhagavad Gita, Vedic chanting, grammar, or yoga texts.',
    icon: 'FaBookOpen',
  },
  {
    id: 'b2',
    title: 'Flexible Timing',
    description: 'Schedule sessions at times that work for you — mornings, evenings, or weekends across any timezone.',
    icon: 'FaClock',
  },
  {
    id: 'b3',
    title: 'Direct Mentorship',
    description: 'Learn directly from an expert. No recorded videos — every session is live, interactive, and personalized.',
    icon: 'FaUserGraduate',
  },
  {
    id: 'b4',
    title: 'Track Progress',
    description: 'Regular reviews, milestone assessments, and detailed feedback ensure steady, visible progress.',
    icon: 'FaChartLine',
  },
  {
    id: 'b5',
    title: 'Resource Library',
    description: 'Access curated PDFs, audio recordings of slokas, and digital worksheets tailored to your syllabus.',
    icon: 'FaLayerGroup',
  },
  {
    id: 'b6',
    title: 'Lifetime Support',
    description: 'Even after your course, have access to doubt-clearing sessions and a growing community of Sanskrit learners.',
    icon: 'FaHeart',
  },
];

export const faqs: FAQ[] = [
  {
    id: 'faq1',
    question: 'Do I need any prior knowledge of Sanskrit to join?',
    answer: 'No prior knowledge is needed for beginner courses or one-on-one personalized learning. We start from the absolute basics — the Devanagari script, pronunciation, and simple vocabulary.',
  },
  {
    id: 'faq2',
    question: 'What platform do you use for online classes?',
    answer: 'All classes are conducted live on Zoom or Google Meet. Sessions are recorded and shared with students for later revision. You only need a stable internet connection.',
  },
  {
    id: 'faq3',
    question: 'Can I switch from a group course to one-on-one learning?',
    answer: 'Absolutely! Many students start with a structured course and then upgrade to one-on-one personalized sessions. We\'ll seamlessly pick up from where you left off.',
  },
  {
    id: 'faq4',
    question: 'Are classes available for students outside India?',
    answer: 'Yes! We have students from the USA, UK, Canada, Australia, and across Europe. Sessions are scheduled according to your timezone. The free intro session helps us coordinate timing.',
  },
];

export const whyLearnReasons = [
  {
    id: 'w1',
    title: 'Understand Ancient Wisdom',
    description: 'Read the Bhagavad Gita, Upanishads, and Vedas in their original language — without translation filters.',
    icon: 'FaOm',
  },
  {
    id: 'w2',
    title: 'Deepen Yoga Practice',
    description: 'Understand Sanskrit terminology used in yoga, pranayama, and meditation for a richer spiritual experience.',
    icon: 'GiLotus',
  },
  {
    id: 'w3',
    title: 'Connect with Heritage',
    description: 'Reconnect with your cultural and spiritual roots. Perfect for NRIs and diaspora communities worldwide.',
    icon: 'FaTemple',
  },
  {
    id: 'w4',
    title: 'Enhance Cognitive Skills',
    description: 'Sanskrit is a highly structured language known to enhance memory, focus, and analytical thinking.',
    icon: 'FaBrain',
  },
  {
    id: 'w5',
    title: 'Chant with Meaning',
    description: 'Move beyond rote chanting. Understand every word of the mantras and slokas you recite daily.',
    icon: 'FaPrayingHands',
  },
  {
    id: 'w6',
    title: 'Academic Excellence',
    description: 'Sanskrit is increasingly valued in linguistics, philosophy, and comparative religion academic circles globally.',
    icon: 'FaGraduationCap',
  },
];
