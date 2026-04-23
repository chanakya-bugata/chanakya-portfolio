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
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "RSS", href: "#" },
];

export const homeStats = [
  { label: "Academic Standing", value: "CGPA 8.38" },
  { label: "Experience", value: "Infosys Intern" },
  { label: "Achievement", value: "HackWithInfy '25" },
  { label: "Current Venture", value: "NamaCart", accent: true },
];

export const projects: Project[] = [
  {
    slug: "namacart",
    title: "NamaCart Platform",
    summary:
      "A specialized e-commerce ecosystem designed to bring traditional Indian artisanal goods to modern consumers.",
    description:
      "A full-stack commerce system focused on local retail digitization, catalog operations, merchant enablement, and logistics orchestration.",
    tags: ["Fintech", "E-Commerce", "Founder"],
    meta: "2024 / Active",
    featured: true,
    dark: true,
  },
  {
    slug: "project-alpha",
    title: "Project Alpha",
    summary:
      "Advanced state management dashboard for enterprise resource planning.",
    description:
      "An internal operations interface for multi-team planning, reporting, and analytics across enterprise workflows.",
    tags: ["React", "Dashboard"],
    meta: "2024 / Q1",
    dark: true,
  },
  {
    slug: "infy-solutions",
    title: "Infy Solutions",
    summary:
      "Winning entry for HackWithInfy '25. Algorithmic optimization tool.",
    description:
      "A performance-minded build focused on algorithmic optimization, implementation clarity, and presentable product thinking.",
    tags: ["Hackathon", "Java"],
    meta: "2025 / Q1",
  },
  {
    slug: "multi-vendor-suite",
    title: "Multi-Vendor Suite",
    summary:
      "A commerce stack for vendor operations, catalog synchronization, and order tracking.",
    description:
      "Built to coordinate vendors, inventory flows, and settlement touchpoints using backend-heavy application design.",
    tags: ["Node.js", "PostgreSQL", "AWS"],
    meta: "2023 / Q4",
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
    years: "Starting",
    title: "Founder & Lead Engineer",
    organization: "NamaCart",
    description:
      "Architecting and developing a comprehensive e-commerce platform. Leading the technical strategy, deciding on stack architecture (NestJS, React), and managing deployment pipelines on AWS to ensure high availability.",
    accent: "accent",
  },
  {
    years: "2025",
    title: "iOS Developer Intern",
    organization: "Infosys",
    description:
      "Contributed to enterprise-level Java applications. Optimized database queries reducing load times by 15% and participated in agile sprints, gaining crucial exposure to large-scale codebase maintainability.",
    accent: "forest",
  },
  {
    years: "2022 - 2026",
    title: "B.Tech, Computer Science",
    organization: "SRM Institute of Science and Technology",
    description:
      "Graduated with distinction. Focus on algorithmic complexity, distributed systems, and software engineering principles. Led the university coding club.",
    accent: "ink",
  },
];

