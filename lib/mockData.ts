import { Course, Testimonial, ProcessStep, Benefit, FAQ } from './types';

export const courses: Course[] = [
  {
    id: 'basic-sanskrit',
    title: 'Basic Sanskrit Learning',
    description: 'Build a strong foundation in Sanskrit starting from alphabet (Devanagari) to basic vocabulary and sentence structure.',
    duration: '1 Hour',
    level: 'Beginner',
    batchDetails: 'Mode: Online',
    topics: ['Alphabet', 'Vocabulary', 'Foundational Grammar', 'Simple Conversation'],
    price: '₹450',
    icon: '📜',
  },
  {
    id: 'advanced-sanskrit',
    title: 'Advanced Sanskrit Learning (Full Grammar)',
    description: 'In-depth study of Sanskrit grammar (Vyakarana), literature, and advanced concepts for serious learners.',
    duration: '1 Hour',
    level: 'Advanced',
    batchDetails: 'Mode: Online',
    topics: ['Paninian Grammar', 'Classic Literature', 'Compound Words', 'Advanced Syntax'],
    price: '₹600',
    icon: '🏛️',
  },
  {
    id: 'sanskrit-shlokas',
    title: 'Basic Sanskrit Shlokas',
    description: 'Learn to chant Bhagavad Gita and popular stotras with correct pronunciation and deep meaning.',
    duration: '1 Hour',
    level: 'Beginner',
    batchDetails: 'Mode: Online',
    topics: ['Bhagavad Gita', 'Spiritual Stotras', 'Pronunciation', 'Meanings'],
    price: '₹400',
    icon: '🎼',
  },
  {
    id: 'cbse-sanskrit',
    title: 'CBSE Sanskrit Class',
    description: 'Dedicated academic support for students following the CBSE curriculum to excel in their school curriculum.',
    duration: '1 Hour',
    level: 'Beginner',
    batchDetails: 'Grade 5-12 | Mode: Online',
    topics: ['Textbook Exercises', 'Grammar', 'Exam Preparation', 'Prose/Poetry'],
    price: '₹500',
    icon: '🎓',
  },
  {
    id: 'state-board-sanskrit',
    title: 'State Board Sanskrit Class',
    description: 'Subject-focused guidance for state board students to master their Sanskrit curriculum and exams.',
    duration: '1 Hour',
    level: 'Beginner',
    batchDetails: 'Grade 5-12 | Mode: Online',
    topics: ['Curriculum Focus', 'Academic Grammar', 'Exam Strategy', 'Literature'],
    price: '₹500',
    icon: '📝',
  },
  {
    id: 'cbse-kannada',
    title: 'CBSE Kannada Class',
    description: 'Quality Kannada language coaching for students following the CBSE curriculum from Primary to High School.',
    duration: '1 Hour',
    level: 'Beginner',
    batchDetails: 'Grade 1-12 | Mode: Online',
    topics: ['Kannada Grammar', 'Literature', 'Writing Skills', 'Exam Prep'],
    price: '₹500',
    icon: '📖',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Ananya R.',
    location: 'Grade 10 Student',
    rating: 5,
    text: '“The one-on-one sessions helped me understand Sanskrit concepts clearly. My confidence improved a lot within a few weeks.”',
    avatar: 'AR',
    course: 'CBSE Sanskrit Class',
  },
  {
    id: 't2',
    name: 'Rohit K.',
    location: 'Working Professional',
    rating: 5,
    text: '“I always wanted to learn Sanskrit properly. The personalized approach made it very easy to follow and stay consistent.”',
    avatar: 'RK',
    course: 'Basic Sanskrit Learning',
  },
  {
    id: 't3',
    name: 'Meghana S.',
    location: 'Parent',
    rating: 5,
    text: '“My child’s academic performance improved significantly. The teaching method is structured yet very flexible.”',
    avatar: 'MS',
    course: 'CBSE Kannada Class',
  },
];

export const howItWorksSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Contact via WhatsApp or Form',
    description: 'Reach out to us through our primary WhatsApp CTA or by filling the contact form. We will respond promptly to discuss your learning goals.',
    icon: '📱',
  },
  {
    id: 2,
    title: 'Free 15-Minute Demo Session',
    description: 'Experience our teaching style first-hand with a 15-minute introductory demo session. No commitments attached.',
    icon: '🎯',
  },
  {
    id: 3,
    title: 'Start Learning',
    description: 'Once you are satisfied, we finalize the schedule and fees manually, and you can begin your personalized Sanskrit journey.',
    icon: '🎓',
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
    question: 'How do I get started with Sanatana Dhara?',
    answer: 'The best way is to contact us via WhatsApp or the contact form. We will schedule a free 15-minute demo session where you can experience our teaching style and discuss your goals.',
  },
  {
    id: 'faq2',
    question: 'Is this only for beginners?',
    answer: 'Not at all! We offer personalized learning for all levels — from absolute beginners to advanced learners seeking academic support or deep scriptural study.',
  },
  {
    id: 'faq3',
    question: 'How are the sessions conducted?',
    answer: 'Sessions are conducted live online via Zoom or Google Meet. This allows for a highly interactive, one-on-one experience regardless of where you are located.',
  },
  {
    id: 'faq4',
    question: 'What are the fees for the programs?',
    answer: 'Since our programs are highly personalized (especially the 1:1 sessions), fees are finalized manually after discussing your specific requirements and schedule during the demo session.',
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
