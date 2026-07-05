export type PageType = 'home' | 'courses' | 'ai-training' | 'biology' | 'chemistry' | 'cbc' | 'contact';

export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  duration: string;
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  modules: string[];
  audience: string[];
  benefits: string[];
  iconName: string;
  category: 'applications' | 'ai' | 'marketing' | 'creative';
  imageUrl?: string;
  rating?: number;
  ratingCount?: number;
  instructorName?: string;
  price?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'registration' | 'payments' | 'duration' | 'learning-options' | 'requirements';
}

export interface Testimonial {
  name: string;
  role: string;
  course: string;
  avatarUrl?: string;
  quote: string;
  rating: number;
}
