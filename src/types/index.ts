export interface Tool {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
  image?: string;
  accentFrom: string;
  accentTo: string;
  accentColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: { monthly: number; yearly: number };
  description: string;
  features: string[];
  popular: boolean;
  cta: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}
