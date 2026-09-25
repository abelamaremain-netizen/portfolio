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
