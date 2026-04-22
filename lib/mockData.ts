import { Course, ProcessStep, FAQ } from './types';

export const courses: Course[] = [
  {
    id: 'basic-sanskrit',
    title: 'Basic Sanskrit Learning',
    description: 'Build foundational knowledge in Sanskrit — from the alphabet and basic vocabulary to simple sentence structure. Perfect for absolute beginners.',
    duration: '1 Hour',
    level: 'Beginner',
    batchDetails: 'Mode: Online',
    topics: ['Devanagari Alphabet', 'Basic Vocabulary', 'Simple Grammar', 'Foundational Conversation'],
    price: '₹450 / hour',
    icon: '📜',
  },
  {
    id: 'advanced-sanskrit',
    title: 'Advanced Sanskrit Learning (Full Grammar)',
    description: 'In-depth study of Sanskrit grammar (Vyakarana), literature, and advanced linguistic concepts for serious learners seeking complete mastery.',
    duration: '1 Hour',
    level: 'Advanced',
    batchDetails: 'Mode: Online',
    topics: ['Paninian Grammar (Vyakarana)', 'Classical Literature', 'Compound Words (Samasas)', 'Advanced Syntax'],
    price: '₹600 / hour',
    icon: '🏛️',
  },
  {
    id: 'basic-shlokas',
    title: 'Basic Sanskrit Shlokas',
    description: 'Learn to chant the Bhagavad Gita and popular stotras with correct pronunciation, rhythm, and a deep understanding of their meaning.',
    duration: '1 Hour',
    level: 'Beginner',
    batchDetails: 'Mode: Online',
    topics: ['Bhagavad Gita Shlokas', 'Stotras & Prayers', 'Correct Pronunciation', 'Meaning & Significance'],
    price: '₹400 / hour',
    icon: '🎼',
  },
  {
    id: 'cbse-sanskrit',
    title: 'CBSE Sanskrit Class',
    description: 'Dedicated academic coaching for CBSE students (Grade 5 to 12). Builds a strong hold on the subject, improves scores, and ensures clarity.',
    duration: '1 Hour',
    level: 'Beginner',
    batchDetails: 'Grade 5–12 | Mode: Online',
    topics: ['Textbook Exercises', 'Sanskrit Grammar', 'Exam Preparation', 'Prose & Poetry'],
    price: '₹500 / hour',
    icon: '🎓',
  },
  {
    id: 'state-board-sanskrit',
    title: 'State Board Sanskrit Class',
    description: 'Focused academic support for State Board students (Grade 5 to 12). Builds subject knowledge and exam confidence aligned with the curriculum.',
    duration: '1 Hour',
    level: 'Beginner',
    batchDetails: 'Grade 5–12 | Mode: Online',
    topics: ['Curriculum Focus', 'Academic Grammar', 'Exam Strategy', 'Literature'],
    price: '₹500 / hour',
    icon: '📝',
  },
  {
    id: 'cbse-kannada',
    title: 'CBSE Kannada Class',
    description: 'Quality Kannada language coaching for CBSE students from Grade 1 to 12. Builds reading, writing, grammar skills and exam readiness.',
    duration: '1 Hour',
    level: 'Beginner',
    batchDetails: 'Grade 1–12 | Mode: Online',
    topics: ['Kannada Grammar', 'Literature & Prose', 'Writing Skills', 'Exam Preparation'],
    price: '₹500 / hour',
    icon: '📖',
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
    description: 'Experience our teaching style with no commitment. A short introductory session to see if we are the right fit for you.',
    icon: '🎯',
  },
  {
    id: 3,
    title: 'Start Learning',
    description: 'Once you are comfortable, we finalize the schedule and begin your personalized Sanskrit or Kannada learning journey.',
    icon: '🎓',
  },
];

export const faqs: FAQ[] = [
  {
    id: 'faq1',
    question: 'How do I get started?',
    answer: 'Simply contact us via WhatsApp or fill in the contact form. We will schedule a free 15-minute demo session where you can experience our teaching style and discuss your goals.',
  },
  {
    id: 'faq2',
    question: 'Who are these classes suitable for?',
    answer: 'Our classes are suitable for Grade 5 to 12 school students as well as adults — both beginners and advanced learners are welcome.',
  },
  {
    id: 'faq3',
    question: 'In which languages are sessions conducted?',
    answer: 'Sessions can be conducted in English, Sanskrit, Telugu, or Kannada — whichever language you are most comfortable with.',
  },
  {
    id: 'faq4',
    question: 'How are the sessions conducted?',
    answer: 'All sessions are conducted live online — one-on-one, interactive, and fully personalized to your pace and goals.',
  },
  {
    id: 'faq5',
    question: 'What are the fees?',
    answer: 'Fees vary by program: Basic Sanskrit ₹450/hr, Advanced Sanskrit ₹600/hr, Shlokas ₹400/hr, CBSE/State Board Sanskrit ₹500/hr, CBSE Kannada ₹500/hr. A free 15-minute demo is available before you commit.',
  },
];
