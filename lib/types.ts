// Course Types
export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Personalized' | 'Academic' | 'Scriptures';
  batchDetails: string;
  topics: string[];
  price: string;
  icon: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
  course: string;
}

// Process Step Types
export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// Benefit Types
export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// FAQ Types
export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
