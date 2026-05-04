import { Course, ProcessStep, FAQ, Testimonial, SiteData } from './types';

export const siteData: SiteData = {
  "site": {
    "name": "Sanatanadhara",
    "scripts": ["सनातनधारा", "ಸನಾತನಧಾರ"],
    "tagline": "Learn Sanskrit with Clarity, Culture, and Confidence",
    "mode": "Online",
    "contact": {
      "phone": "8073362748",
      "whatsapp": "9482111881",
      "email": "harihiom02@gmail.com"
    }
  },
  "hero": {
    "title": "Learn Sanskrit with Clarity, Culture, and Confidence",
    "subtitle": "Personalized one-on-one Sanskrit learning for school students and adults from basics to advanced grammar and shlokas.",
    "ctaPrimary": {
      "label": "Start Free Demo",
      "type": "whatsapp"
    },
    "ctaSecondary": {
      "label": "Contact Us",
      "type": "scroll_contact"
    }
  },
  "sections": {
    "intro": {
      "title": "Welcome to Sanatanadhara",
      "content": "Sanatanadhara is a personalized Sanskrit coaching platform focused on simple, structured, and meaningful learning. Suitable for school students, beginners, and advanced learners."
    },
    "features": {
      "title": "Why Choose Us",
      "items": [
        {
          "title": "1:1 Personalized Learning",
          "description": "Every session is tailored to the student's level and pace."
        },
        {
          "title": "Multi-language Teaching",
          "description": "English, Sanskrit, Telugu, Kannada"
        },
        {
          "title": "Academic Support",
          "description": "CBSE and State Board focused preparation"
        },
        {
          "title": "Concept Clarity",
          "description": "Focus on understanding, not memorization"
        },
        {
          "title": "Flexible Schedule",
          "description": "Classes based on student convenience"
        }
      ]
    },
    "about": {
      "title": "About the Teacher",
      "experience": "5+ years",
      "qualifications": [
        "M.A (Acharya) in Sanskrit",
        "B.Ed (Shiksha-sastri) in Sanskrit",
        "KARTET certified",
        "Yoga M.Sc"
      ],
      "description": "Teaching Sanskrit is my passion. My goal is to make learning simple, practical, and effective for every student.",
      "languages": ["English", "Sanskrit", "Telugu", "Kannada"]
    },
    "programs": {
      "title": "Learning Programs",
      "list": [
        {
          "id": "basic",
          "name": "Basic Sanskrit Learning",
          "description": "Strong foundation for beginners.",
          "duration": "1 hour",
          "mode": "Online",
          "type": "1:1",
          "price": { "inr": "400 - 700", "usd": "6 - 10" }
        },
        {
          "id": "advanced",
          "name": "Advanced Sanskrit (Full Grammar)",
          "description": "Deep grammar and advanced concepts.",
          "duration": "1 hour",
          "mode": "Online",
          "type": "1:1",
          "price": { "inr": "500 - 800", "usd": "8 - 12" }
        },
        {
          "id": "shlokas",
          "name": "Shlokas & Scriptures",
          "description": "Bhagavad Gita, Stotras, Upanishads, Vishnu Sahasranama, and Vedic chanting.",
          "duration": "1 hour",
          "mode": "Online",
          "type": "1:1",
          "price": { "inr": "400 - 500", "usd": "6 - 8" }
        },
        {
          "id": "cbse-sanskrit",
          "name": "CBSE Sanskrit",
          "description": "Grade 5–12 academic support.",
          "duration": "1 hour",
          "mode": "Online",
          "type": "academic",
          "price": { "inr": "400 - 600", "usd": "6 - 9" }
        },
        {
          "id": "state-sanskrit",
          "name": "State Board Sanskrit",
          "description": "Curriculum-focused coaching.",
          "duration": "1 hour",
          "mode": "Online",
          "type": "academic",
          "price": { "inr": "400 - 600", "usd": "6 - 9" }
        },
        {
          "id": "cbse-kannada",
          "name": "CBSE Kannada",
          "description": "Grade 1–12 Kannada coaching.",
          "duration": "1 hour",
          "mode": "Online",
          "type": "academic",
          "price": { "inr": "400 - 600", "usd": "6 - 9" }
        }
      ]
    },
    "process": {
      "title": "How It Works",
      "steps": [
        {
          "step": 1,
          "title": "Contact",
          "description": "Reach out via WhatsApp or form"
        },
        {
          "step": 2,
          "title": "Free Demo",
          "description": "Attend a 15-minute demo session"
        },
        {
          "step": 3,
          "title": "Start Learning",
          "description": "Begin personalized sessions"
        }
      ]
    },
    "audience": {
      "title": "Who Can Join",
      "items": [
        "School Students (Grade 5–12)",
        "Adults",
        "Beginners",
        "Advanced learners"
      ]
    },
    "testimonials": [
      {
        "id": "t1",
        "name": "Ananya S.",
        "location": "Dharwad",
        "rating": 5,
        "text": "The 1:1 sessions have helped my son improve his Sanskrit scores significantly. The teaching style is very patient and simple to understand.",
        "avatar": "https://i.pravatar.cc/150?u=ananya",
        "course": "CBSE Sanskrit (Grade 8)"
      },
      {
        "id": "t2",
        "name": "Rajesh Kumar",
        "location": "Bangalore",
        "rating": 5,
        "text": "I started learning Sanskrit as an adult beginner. Sanatanadhara makes it so easy to grasp complex grammar rules. Highly recommended for serious learners!",
        "avatar": "https://i.pravatar.cc/150?u=rajesh",
        "course": "Basic Sanskrit Learning"
      }
    ],
    "cta": {
      "primary": "Book Free Demo",
      "secondary": "Chat on WhatsApp"
    }
  },
  "integrations": {
    "whatsapp": {
      "number": "919482111881",
      "defaultMessage": "Hari Om, I am interested in Sanskrit classes. I would like to book a free demo session."
    }
  }
};

// Map to existing constants for backward compatibility
export const courses: Course[] = siteData.sections.programs.list.map(p => ({
  id: p.id,
  title: p.name,
  description: p.description,
  duration: p.duration,
  level: p.id.includes('advanced') ? 'Advanced' : 'Beginner',
  category: p.type === 'academic' ? 'Academic' : (p.id === 'shlokas' ? 'Scriptures' : 'Personalized'),
  batchDetails: `${p.type === 'academic' ? 'Academic Support' : '1:1 Personalized'} | Mode: ${p.mode}`,
  topics: [], // We can add some default topics or keep it empty as the new JSON doesn't specify them per program
  price: `₹${p.price.inr} / hour`, // Defaulting to INR for backward compatibility
  icon: p.id === 'shlokas' ? '🎼' : (p.id.includes('kannada') ? '📖' : '📜'),
}));

export const testimonials: Testimonial[] = siteData.sections.testimonials;

export const howItWorksSteps: ProcessStep[] = siteData.sections.process.steps.map(s => ({
  id: s.step,
  title: s.title,
  description: s.description,
  icon: s.step === 1 ? '📱' : (s.step === 2 ? '🎯' : '🎓'),
}));

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
    answer: 'All sessions are conducted live online one-on-one, interactive, and fully personalized to your pace and goals.',
  },
  {
    id: 'faq5',
    question: 'What are the fees?',
    answer: 'Fees vary by program. Detailed pricing for each course is listed in both INR and USD in our Programs section. A free 15-minute demo is available before you commit.',
  },
];

