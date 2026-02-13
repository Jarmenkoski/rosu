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

export const COMPANY_TAGLINE = "Making Everyday Life Easier and Better" as const;

export const COMPANY_DESCRIPTION =
  "RoSu Oy is a Finnish software company on a mission to build digital products that genuinely improve people's daily lives. We believe technology should simplify, not complicate — and every product we create starts from that conviction." as const;

export const PRODUCT = {
  name: "Ask4Help",
  tagline: "Connecting homeowners with trusted professionals",
  description:
    "A mobile-first contractor marketplace where homeowners post jobs, contractors bid, and work gets done — making home improvement simple, transparent, and stress-free.",
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
      "We build web and mobile platforms that people actually enjoy using. From concept to launch, we focus on creating seamless experiences that make complex tasks feel simple.",
    icon: "code",
  },
  {
    title: "Technical Consulting",
    description:
      "Not sure where to start? We help you choose the right technology, plan your architecture, and make smart decisions that save time and money down the road.",
    icon: "lightbulb",
  },
  {
    title: "Product Design",
    description:
      "Great software starts with understanding people. We design intuitive interfaces through user research, prototyping, and iteration until it just feels right.",
    icon: "palette",
  },
] as const;

export const FOUNDERS = [
  {
    name: "Julius Rovio",
    role: "CEO",
    bio: "Driven by a belief that technology should make life easier for everyone. Leads product vision and hands-on development at RoSu Oy.",
  },
  {
    name: "Jaakko Suomalainen",
    role: "Chairman",
    bio: "Brings strategic thinking and business expertise to guide the company's growth. Focused on building something that truly matters.",
  },
] as const;

export const FEATURES = [
  {
    title: "Job Posting",
    description:
      "People describe their project, set a budget, date and get matched with qualified contractors in minutes.",
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
      "Real-time chat keeps homeowners and contractors connected throughout the project.",
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
    description: "Describe your project and let contractors come to you. Previously there has been no easy way to find help for home projects — Ask4Help makes it simple and reliable.",
  },
  {
    title: "Compare Bids",
    description:
      "Review competitive offers from verified professionals. Transparent pricing and contractor profiles help you make informed decisions without the stress of negotiating or vetting on your own.",
  },
  {
    title: "Real-time Chat",
    description:
      "Communicate directly with your contractor throughout the project. No more missed calls or lost emails — just seamless, instant messaging to keep everyone on the same page.",
  },
  {
    title: "Rate & Review",
    description: "Share your experience and help build a trusted community. Your feedback not only helps other homeowners but also rewards great contractors and encourages high-quality work.",
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
    title: "Simplicity",
    description:
      "The best technology is the kind you don't have to think about. We obsess over removing friction so that our products feel effortless to use.",
  },
  {
    title: "Real Impact",
    description:
      "We don't build for the sake of building. Every product we create must genuinely improve someone's everyday life — or it's not worth shipping.",
  },
  {
    title: "Transparency",
    description:
      "Honest communication, clear expectations, no hidden surprises. We build trust by being straightforward with our clients, partners, and users.",
  },
  {
    title: "Continuous Improvement",
    description:
      "Good enough isn't good enough. We listen, learn, and iterate — because the best version of the product is always the next one.",
  },
] as const;

export const TIMELINE = [
  {
    date: "Q2 2024",
    title: "Company Founded",
    description: "RoSu Oy registered in Finland with a clear mission: build software that makes everyday life easier and better.",
  },
  {
    date: "Q1 2025",
    title: "Ask4Help Concept",
    description: "Ask4Help idea was staged and planned."
  },
  {
    date: "Q2 2025",
    title: "Ask4Help Concept Demo",
    description: "Designed and built the first interactive prototype of Ask4Help.",
  },
  {
    date: "Q4 2025",
    title: "Demo Platform Built",
    description: "Developed a working demo of the Ask4Help platform, bringing the concept to life with real functionality.",
  },
  {
    date: "Q1 2026",
    title: "First Funding Application",
    description: "Submitted our first funding application to accelerate product development and bring our vision to a wider audience.",
  },
  {
    date: "Q2 2026",
    title: "Production Platform",
    description: "Building the proper production version of Ask4Help — ready to serve real homeowners and contractors.",
  },
] as const;
