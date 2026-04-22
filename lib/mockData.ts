import { Course, ProcessStep, FAQ } from './types';

export const courses: Course[] = [
  {
    id: 'personalized-sanskrit',
    title: 'Personalized Sanskrit Learning (1:1)',
    description: 'Fully customized sessions based on your level and goals. Every lesson is tailored to your pace, background, and learning objectives.',
    duration: 'Flexible',
    level: 'Beginner',
    batchDetails: 'Mode: Online',
    topics: ['Customized learning plan', 'Flexible session timings', 'Suitable for all levels', 'Beginner to Advanced'],
    price: 'Contact for pricing',
    icon: '📜',
  },
  {
    id: 'academic-support',
    title: 'Academic Support (CBSE / State Board)',
    description: 'Structured guidance aligned with your school syllabus. Improves scores, builds conceptual clarity, and prepares for exams with confidence.',
    duration: 'Per session',
    level: 'Beginner',
    batchDetails: 'Grade 5–12 | Mode: Online',
    topics: ['Curriculum-aligned sessions', 'Exam-focused learning', 'Better scores and clarity', 'CBSE & State Board'],
    price: 'Contact for pricing',
    icon: '🎓',
  },
  {
    id: 'shlokas-scriptures',
    title: 'Shlokas & Scriptures Learning',
    description: 'Learn to chant with correct pronunciation, understand the meaning, and appreciate the significance of sacred Sanskrit texts and mantras.',
    duration: 'Per session',
    level: 'Beginner',
    batchDetails: 'Mode: Online',
    topics: ['Correct pronunciation', 'Meaning & significance', 'Bhagavad Gita shlokas', 'Sacred stotras'],
    price: 'Contact for pricing',
    icon: '🎼',
  },
];

export const howItWorksSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Contact via WhatsApp or Form',
    description: 'Reach out through WhatsApp or fill in the contact form. We will respond promptly to understand your learning goals.',
    icon: '📱',
  },
  {
    id: 2,
    title: 'Attend Free 15-Minute Demo Session',
    description: 'Experience our teaching style with no commitment. A short introductory session to see if we are the right fit.',
    icon: '🎯',
  },
  {
    id: 3,
    title: 'Start Learning',
    description: 'Once you are comfortable, we finalize the schedule and begin your personalized Sanskrit learning journey.',
    icon: '🎓',
  },
];

export const faqs: FAQ[] = [
  {
    id: 'faq1',
    question: 'How do I get started with Sanatanadhara?',
    answer: 'Simply contact us via WhatsApp or fill in the contact form. We will schedule a free 15-minute demo session where you can experience our teaching style and discuss your goals.',
  },
  {
    id: 'faq2',
    question: 'Is this suitable for beginners?',
    answer: 'Yes! Our programs are designed for all levels — from absolute beginners to advanced learners. Whether you have never seen Sanskrit before or want to deepen your knowledge, we customize learning for you.',
  },
  {
    id: 'faq3',
    question: 'In which languages are sessions conducted?',
    answer: 'Sessions can be conducted in English, Sanskrit, Telugu, or Kannada — whichever you are most comfortable with.',
  },
  {
    id: 'faq4',
    question: 'How are the sessions conducted?',
    answer: 'All sessions are conducted live online via Zoom or Google Meet — one-on-one, interactive, and fully personalized.',
  },
  {
    id: 'faq5',
    question: 'What are the fees?',
    answer: 'Fees are discussed and finalized after the free demo session based on your requirements and chosen program. Please contact us for details.',
  },
];
