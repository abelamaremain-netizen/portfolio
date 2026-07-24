export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  imageUrl: string
  liveUrl?: string
  repoUrl?: string
  featured: boolean
  tags: string[]
  highlights?: string[]
}

export const projects: Project[] = [
  {
    id: 'legalcase',
    title: 'LegalCase',
    description:
      'Full-stack SaaS platform for Ethiopian law firms — combines a Flutter mobile app, ' +
      'Node.js/TypeScript REST API, and a React admin panel into one cohesive product.',
    techStack: [
      'Flutter', 'Dart', 'Node.js', 'TypeScript', 'Express',
      'PostgreSQL', 'Knex.js', 'React', 'Vite', 'JWT', 'Docker',
      'GitHub Actions', 'Chapa',
    ],
    imageUrl: '/images/projects/legalcase.png',
    featured: true,
    tags: ['mobile', 'backend', 'saas', 'fintech', 'fullstack'],
    highlights: [
      '40+ REST API endpoints with role-based access & subscription guard middleware',
      'Alarm-style hearing notifications that survive app kill and device reboot (USE_EXACT_ALARM + BOOT_COMPLETED)',
      'Chapa payment gateway integration with free-trial enforcement and 402 paywall',
      'Bilingual UI — English & Amharic (አማርኛ)',
      '18 database migrations · 15+ mobile screens · monorepo architecture',
    ],
  },
  {
    id: 'cooperative-mgmt',
    title: 'Cooperative Management System',
    description:
      "Full-stack digital platform replacing paper-based processes for an employees' " +
      'savings & credit cooperative — member lifecycle, loan management, payroll ' +
      'integration, and a complete general ledger.',
    techStack: [
      'Java 17', 'Spring Boot 3', 'Spring Security', 'JWT',
      'Spring Data JPA', 'PostgreSQL', 'Flyway', 'Maven',
      'Next.js 14', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'Tailwind CSS',
    ],
    imageUrl: '/images/projects/cooperative.png',
    featured: true,
    tags: ['backend', 'fintech', 'fullstack', 'java', 'nextjs'],
    highlights: [
      'FIFO loan queue enforcement with two-level skip workflow (officer requests, manager approves)',
      'LTV-adjusted collateral coverage — four collateral types including locked savings and external cooperative',
      'Versioned system config — every transaction locks the config active at that time, no retroactive changes',
      'Dual-write financial tracking — member account + cooperative general ledger in the same DB transaction',
      '~25 REST controllers · 24 Flyway migrations · ~40 frontend pages · 5 RBAC roles',
    ],
  },
]
