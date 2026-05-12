import type { Project, Service, Testimonial } from "../types";

export const projects: Project[] = [
  {
    id: "luminary-rebrand",
    title: "Luminary Finance Rebrand",
    category: "Branding",
    thumbnail: "/assets/images/project-luminary.jpg",
    shortDesc:
      "Complete brand identity overhaul for a leading fintech startup.",
    tags: ["Branding", "Identity", "UI/UX"],
    overview:
      "Luminary Finance needed a modern identity to match their growth from startup to Series B. We created a comprehensive brand system from logo to UI component library that exudes trust and innovation.",
    deliverables: [
      "Brand Guidelines",
      "Logo Suite",
      "UI Component Library",
      "Marketing Templates",
    ],
    techStack: ["Figma", "Illustrator", "After Effects"],
    results: [
      "42% increase in sign-up conversion",
      "Raised $8M Series B post-launch",
      "Featured in Forbes Fintech 2024",
    ],
    clientName: "Luminary Finance",
  },
  {
    id: "arcane-ecommerce",
    title: "Arcane E-Commerce Platform",
    category: "Development",
    thumbnail: "/assets/images/project-arcane.jpg",
    shortDesc:
      "Full-stack e-commerce build with real-time inventory and AI recommendations.",
    tags: ["Development", "E-Commerce", "React"],
    overview:
      "Arcane needed a performant, scalable online store that could handle 50k+ concurrent users during flash sales. We architected a headless commerce solution with sub-100ms page loads.",
    deliverables: [
      "Headless Frontend",
      "Custom CMS",
      "Payment Integration",
      "Analytics Dashboard",
    ],
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    results: [
      "98ms average page load",
      "3.2x revenue increase in Q1",
      "0 downtime during 50k user peak",
    ],
    clientName: "Arcane Goods",
  },
  {
    id: "nova-saas",
    title: "Nova SaaS Dashboard",
    category: "UI/UX",
    thumbnail: "/assets/images/project-nova.jpg",
    shortDesc: "Complex analytics dashboard redesigned for clarity and speed.",
    tags: ["UI/UX", "Dashboard", "Design System"],
    overview:
      "Nova's analytics platform had grown organically for 4 years, resulting in a cluttered, inconsistent interface. We conducted a full UX audit, rebuilt their design system, and delivered a redesign that cut task completion time by half.",
    deliverables: [
      "UX Audit Report",
      "Design System",
      "Interactive Prototype",
      "Dev Handoff",
    ],
    techStack: ["Figma", "Storybook", "React", "Tailwind CSS"],
    results: [
      "52% reduction in task time",
      "NPS score up from 32 to 71",
      "Churn reduced by 18%",
    ],
    clientName: "Nova Analytics",
  },
  {
    id: "pulse-mobile",
    title: "Pulse Health App",
    category: "Web Design",
    thumbnail: "/assets/images/project-pulse.jpg",
    shortDesc:
      "Wellness tracking platform with calming, accessible visual design.",
    tags: ["Web Design", "Health", "Accessibility"],
    overview:
      "Pulse wanted a web app that felt as calming to use as the health outcomes it promised. We designed an accessible, WCAG 2.1 AA-compliant experience with gentle motion and clear data visualizations.",
    deliverables: [
      "Responsive Web App",
      "Accessibility Audit",
      "Motion Design",
      "Design Tokens",
    ],
    techStack: ["Figma", "React", "Framer Motion", "Chart.js"],
    results: [
      "WCAG 2.1 AA certified",
      "4.9★ App Store rating",
      "300k active users at launch",
    ],
    clientName: "Pulse Health",
  },
  {
    id: "drift-agency",
    title: "Drift Creative Agency Site",
    category: "Web Design",
    thumbnail: "/assets/images/project-drift.jpg",
    shortDesc: "Award-winning portfolio site for a NYC creative studio.",
    tags: ["Web Design", "Portfolio", "Animation"],
    overview:
      "Drift needed a site that functioned as a living portfolio — immersive, fast, and memorable. We built a scroll-driven experience with WebGL accents that earned them a Awwwards Site of the Day.",
    deliverables: [
      "Full Website",
      "CMS Integration",
      "Custom Animations",
      "Performance Optimization",
    ],
    techStack: ["React", "Three.js", "GSAP", "Sanity CMS"],
    results: [
      "Awwwards Site of the Day",
      "60% more inbound leads",
      "Sub 2s Largest Contentful Paint",
    ],
    clientName: "Drift Studio NYC",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    clientName: "Sarah Chen",
    company: "Luminary Finance",
    quote:
      "Reemania didn't just redesign our brand — they redefined how we think about our product. The attention to detail and strategic thinking were unlike anything we'd experienced.",
    avatar: "/assets/images/avatar-sarah.jpg",
    rating: 5,
  },
  {
    id: "t2",
    clientName: "Marcus Rivera",
    company: "Arcane Goods",
    quote:
      "The team delivered a platform that outperformed every benchmark we set. Six months post-launch and we're still discovering smart decisions baked into the architecture.",
    avatar: "/assets/images/avatar-marcus.jpg",
    rating: 5,
  },
  {
    id: "t3",
    clientName: "Priya Nair",
    company: "Nova Analytics",
    quote:
      "Working with Reemania felt like having a design co-founder. They understood our users better than we did and translated that into an interface our customers actually love.",
    avatar: "/assets/images/avatar-priya.jpg",
    rating: 5,
  },
  {
    id: "t4",
    clientName: "James Okafor",
    company: "Pulse Health",
    quote:
      "Accessibility and beauty are usually in tension. Reemania somehow made them inseparable. Our users — including those with disabilities — have never been happier.",
    avatar: "/assets/images/avatar-james.jpg",
    rating: 5,
  },
];

export const services: Service[] = [
  {
    id: "web-design",
    title: "Web Design",
    icon: "monitor",
    description:
      "Pixel-perfect interfaces that convert. We craft visual systems from wireframes to production-ready designs — every interaction intentional, every pixel purposeful.",
  },
  {
    id: "development",
    title: "Development",
    icon: "code-2",
    description:
      "Blazing-fast, accessible web apps built with modern stacks. We write clean, maintainable code that scales with your business and delights your users.",
  },
  {
    id: "branding",
    title: "Branding",
    icon: "layers",
    description:
      "Identities that mean something. From logo to motion language, we build brand systems that stand out in crowded markets and resonate with your ideal customers.",
  },
  {
    id: "ui-ux",
    title: "UI/UX Strategy",
    icon: "pen-tool",
    description:
      "Research-backed UX that removes friction. We map user journeys, audit existing products, and design flows that turn confused visitors into loyal advocates.",
  },
];
