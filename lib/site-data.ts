export type NavItem = {
  label: string;
  href: string;
  key: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  meta: string;
  featured?: boolean;
  dark?: boolean;
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
};

export const navItems: NavItem[] = [
  { key: "about", label: "About", href: "/about" },
  { key: "projects", label: "Projects", href: "/projects" },
  { key: "blog", label: "Blog", href: "/blog" },
  { key: "contact", label: "Contact", href: "/contact" },
];

export const footerLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chanakya-bugata/" },
  { label: "GitHub", href: "https://github.com/chanakya-bugata" },
];

export const homeStats = [
  { label: "Education", value: "B.Tech CSE (2026)" },
  { label: "Employee", value: "Accenture" },
  { label: "Previous", value: "Infosys Intern" },
  { label: "Current Focus", value: "NamaCart", accent: true },
];

export const projects: Project[] = [
  {
    slug: "legal-ai-assist",
    title: "Legal AI Assist",
    summary:
      "AI-powered system that simplifies complex legal documents for non-legal users.",
    description:
      "Built an LLM-based application to process legal documents and generate simplified explanations. Focused on improving accessibility by translating complex legal language into understandable summaries. Designed a pipeline for document input, processing, and prompt-based summarization.",
    tags: ["AI", "LLM", "NLP", "Python"],
    meta: "2026 / Active",
    featured: true,
  },
  {
    slug: "namacart",
    title: "NamaCart (Early Stage)",
    summary:
      "Hyperlocal commerce platform connecting neighborhood stores with customers.",
    description:
      "An early-stage startup focused on enabling local retailers to digitize their operations. Conducted market research, designed product flows, and defined scalable system architecture. Currently building initial validation version (V0) focused on reserve-and-pickup model.",
    tags: ["Startup", "E-Commerce", "System Design"],
    meta: "2026 / In Progress",
  },
  {
    slug: "voicebridge",
    title: "VoiceBridge",
    summary:
      "Real-time multilingual speech translation system.",
    description:
      "Built a real-time translation pipeline using external APIs. Implemented speech-to-text, translation, and response flow. Backend deployed using Docker for scalability.",
    tags: ["React", "FastAPI", "Docker", "GCP"],
    meta: "2025",
  },
  {
    slug: "multi-vendor-suite",
    title: "Multi-Vendor Commerce System",
    summary:
      "Backend system for vendor operations, catalog, and order management.",
    description:
      "Designed REST APIs for authentication, product catalog, and order workflows using NestJS and PostgreSQL. Deployed using Docker and AWS. Forms the technical base for NamaCart.",
    tags: ["Node.js", "PostgreSQL", "AWS", "Docker"],
    meta: "2024",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "strictly-typed-json-configuration",
    title: "Migrating to a strictly typed JSON configuration",
    category: "Tech",
    date: "Oct 24, 2023",
    readTime: "6 min read",
    excerpt:
      "Why we abandoned loose yaml files for a rigid, strongly-typed JSON schema to govern our UI components, reducing runtime errors by 40%.",
  },
  {
    slug: "architecting-the-multi-tenant-database",
    title: "Architecting the multi-tenant database",
    category: "NamaCart",
    date: "Oct 12, 2023",
    readTime: "12 min read",
    excerpt:
      "Row-level security versus schema-per-tenant. The tradeoffs we considered when building the foundation for NamaCart's B2B scaling.",
  },
  {
    slug: "the-illusion-of-done",
    title: "The illusion of 'Done' in early-stage products",
    category: "Founder",
    date: "Sep 28, 2023",
    readTime: "4 min read",
    excerpt:
      "Reflections on balancing technical debt with shipping velocity. Why imperfect but functional code often beats elegant stagnation.",
  },
  {
    slug: "implementing-brutalist-ui-tokens",
    title: "Implementing brutalist UI tokens in Tailwind",
    category: "Tech",
    date: "Sep 15, 2023",
    readTime: "8 min read",
    excerpt:
      "A deep dive into our design token system and how we enforce a restrained, editorial visual language in code.",
  },
  {
    slug: "designing-the-merchant-onboarding-flow",
    title: "Designing the merchant onboarding flow",
    category: "NamaCart",
    date: "Sep 02, 2023",
    readTime: "5 min read",
    excerpt:
      "Reducing friction for non-technical users by deferring complex settings and focusing on first-value moments.",
  },
];

export const technicalGroups = [
  {
    title: "Languages",
    accent: "accent",
    items: ["C++", "Java", "TypeScript"],
  },
  {
    title: "Frontend",
    accent: "forest",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & Cloud",
    accent: "accent",
    items: ["NestJS", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
];

export const experienceTimeline = [
  {
    years: "2026",
    title: "Founder (Early Stage)",
    organization: "NamaCart",
    description:
      "Conducting market research, designing system architecture, and building the initial product roadmap for a hyperlocal commerce platform.",
    accent: "ink",
  },
  {
    years: "2026 – Present",
    title: "Software Engineer",
    organization: "Accenture",
    description:
      "Working on enterprise applications and contributing to development workflows, API integrations, and maintaining scalable systems within Agile environments.",
    accent: "accent",
  },
  {
    years: "2025",
    title: "iOS Developer Intern",
    organization: "Infosys",
    description:
      "Developed admin-side modules for an iOS application, implementing CRUD operations and API integrations while working in Agile sprints using Git and JIRA.",
    accent: "forest",
  },
  {
    years: "2022 – 2026",
    title: "B.Tech, Computer Science",
    organization: "SRM Institute of Science and Technology",
    description:
      "Focused on software engineering, system design, and real-world application development.",
    accent: "ink",
  },
];

