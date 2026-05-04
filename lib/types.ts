// Site Configuration Types
export interface SiteConfig {
  name: string;
  scripts: string[];
  tagline: string;
  mode: string;
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
  };
}

export interface HeroConfig {
  title: string;
  subtitle: string;
  ctaPrimary: {
    label: string;
    type: 'whatsapp' | 'scroll_contact';
  };
  ctaSecondary: {
    label: string;
    type: 'whatsapp' | 'scroll_contact';
  };
}

export interface Feature {
  title: string;
  description: string;
}

export interface Program {
  id: string;
  name: string;
  description: string;
  duration: string;
  mode: string;
  type: string;
  price: {
    inr: string | number;
    usd: string | number;
  };
}

export interface Step {
  step: number;
  title: string;
  description: string;
}

export interface SiteData {
  site: SiteConfig;
  hero: HeroConfig;
  sections: {
    intro: {
      title: string;
      content: string;
    };
    features: {
      title: string;
      items: Feature[];
    };
    about: {
      title: string;
      experience: string;
      qualifications: string[];
      description: string;
      languages: string[];
    };
    programs: {
      title: string;
      list: Program[];
    };
    process: {
      title: string;
      steps: Step[];
    };
    audience: {
      title: string;
      items: string[];
    };
    testimonials: Testimonial[];
    cta: {
      primary: string;
      secondary: string;
    };
  };
  integrations: {
    whatsapp: {
      number: string;
      defaultMessage: string;
    };
  };
}

// Existing types for backward compatibility or internal use
export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  category: string;
  batchDetails: string;
  topics: string[];
  price: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
  course: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

