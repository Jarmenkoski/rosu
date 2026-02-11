export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

export interface TechItem {
  name: string;
  category: string;
}
