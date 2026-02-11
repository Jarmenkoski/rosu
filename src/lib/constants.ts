export const COMPANY = {
  name: "RoSu Oy",
  businessId: "3451824-6",
  email: "info@rosu.fi",
  phone: "+358 40 849 6671",
  address: "Vuotakuja 5, 12600 Läyliäinen",
  country: "Finland",
  founded: 2024,
  website: "https://rosu.fi",
} as const;

export const COMPANY_TAGLINE = "Engineering Digital Solutions from Finland" as const;

export const COMPANY_DESCRIPTION =
  "RoSu Oy is a Finnish software development company building modern digital products. We combine deep technical expertise with practical Nordic design thinking to deliver platforms that solve real problems." as const;

export const PRODUCT = {
  name: "Ask4Help",
  tagline: "Connecting homeowners with trusted professionals",
  description:
    "A mobile-first contractor marketplace platform where homeowners post jobs, contractors bid, and work gets done — all through one seamless experience.",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    title: "Platform Development",
    description:
      "Full-stack web and mobile platforms built with modern frameworks. From marketplace apps to SaaS products, we architect and deliver scalable solutions.",
    icon: "code",
  },
  {
    title: "Technical Consulting",
    description:
      "Architecture reviews, technology selection, and strategic guidance to help your team make the right technical decisions from day one.",
    icon: "lightbulb",
  },
  {
    title: "Product Design",
    description:
      "User-centered design and prototyping that turns complex requirements into intuitive, beautiful interfaces people love to use.",
    icon: "palette",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Infrastructure setup, CI/CD pipelines, and cloud deployment strategies that keep your applications running smoothly at scale.",
    icon: "cloud",
  },
] as const;

export const FOUNDERS = [
  {
    name: "Julius Rovio",
    role: "CEO",
    bio: "Leads the company's vision and product strategy. Passionate about building technology that solves real-world problems and creating seamless digital experiences.",
  },
  {
    name: "Jaakko Suomalainen",
    role: "Chairman",
    bio: "Oversees company governance and strategic direction. Brings business expertise and a focus on sustainable growth to guide RoSu Oy's long-term trajectory.",
  },
] as const;

export const FEATURES = [
  {
    title: "Job Posting",
    description:
      "Homeowners describe their project, set a budget, and get matched with qualified contractors in minutes.",
    icon: "clipboard",
  },
  {
    title: "Smart Bidding",
    description:
      "Contractors submit competitive bids. Homeowners compare offers, reviews, and expertise before choosing.",
    icon: "trending-up",
  },
  {
    title: "Scheduling",
    description:
      "Built-in calendar coordination so both parties agree on timelines without back-and-forth emails.",
    icon: "calendar",
  },
  {
    title: "Live Messaging",
    description:
      "Real-time chat powered by Socket.io keeps homeowners and contractors connected throughout the project.",
    icon: "message-circle",
  },
  {
    title: "Order Tracking",
    description:
      "Follow every project from open to completed with transparent status updates at each stage.",
    icon: "package",
  },
  {
    title: "Secure Payments",
    description:
      "Protected transactions ensure contractors get paid and homeowners only pay for completed work.",
    icon: "shield",
  },
] as const;

export const VALUE_PROPS = [
  {
    title: "Post a Job",
    description: "Describe your project and let contractors come to you.",
  },
  {
    title: "Compare Bids",
    description:
      "Review competitive offers from verified professionals.",
  },
  {
    title: "Real-time Chat",
    description:
      "Communicate directly with your contractor throughout the project.",
  },
  {
    title: "Rate & Review",
    description: "Share your experience and help build a trusted community.",
  },
] as const;

export const ORDER_STAGES = [
  { key: "open", label: "Open", description: "Job posted and visible to contractors" },
  { key: "bidding", label: "Bidding", description: "Contractors submit their offers" },
  { key: "assigned", label: "Assigned", description: "Homeowner selects a contractor" },
  { key: "in_progress", label: "In Progress", description: "Work is being carried out" },
  { key: "ready_to_pay", label: "Ready to Pay", description: "Work completed, awaiting payment" },
  { key: "completed", label: "Completed", description: "Project finished successfully" },
] as const;

export const TECH_STACK = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Express", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Prisma", category: "ORM" },
  { name: "Socket.io", category: "Real-time" },
  { name: "NextAuth.js", category: "Auth" },
  { name: "Turborepo", category: "Monorepo" },
] as const;

export const VALUES = [
  {
    title: "Transparency",
    description:
      "Open communication and honest pricing in everything we do. We believe trust is built through clarity — with our clients, our partners, and our team.",
  },
  {
    title: "Quality",
    description:
      "We hold ourselves to high engineering standards. Clean code, thorough testing, and thoughtful architecture are non-negotiable in every project we deliver.",
  },
  {
    title: "Innovation",
    description:
      "We stay at the forefront of technology, continuously exploring modern tools and approaches to deliver solutions that are built for the future.",
  },
  {
    title: "User-First",
    description:
      "Every feature we build starts with the end user. We design and develop with empathy, ensuring our products solve real problems in intuitive ways.",
  },
] as const;

export const TIMELINE = [
  {
    date: "Q1 2024",
    title: "Company Founded",
    description: "RoSu Oy registered in Finland with a vision to build impactful digital products.",
  },
  {
    date: "Q2 2024",
    title: "Ask4Help Development Begins",
    description: "First product kicks off. Core platform architecture designed with Next.js, Express, and PostgreSQL.",
  },
  {
    date: "Q3 2024",
    title: "Core Platform Built",
    description: "Job posting, bidding system, real-time messaging, and order tracking implemented.",
  },
  {
    date: "Q4 2024",
    title: "Beta Testing & Iteration",
    description: "Internal testing and refinement. Payment system and review features added to Ask4Help.",
  },
  {
    date: "Q1 2025",
    title: "Platform Refinement",
    description: "UI/UX improvements based on beta feedback. Performance optimization across the stack.",
  },
  {
    date: "2025",
    title: "Growing the Company",
    description: "Expanding our service offering and preparing Ask4Help for public launch. Corporate site live at rosu.fi.",
  },
] as const;
