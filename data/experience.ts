export interface WorkExperience {
  id: string
  role: string
  company: string
  location: string
  startDate: string
  endDate?: string
  description: string[]
  technologies: string[]
  logoUrl?: string
}

export const experiences: WorkExperience[] = [
  {
    id: 'exp-coop',
    role: 'Junior Software Developer',
    company: 'Woldia University',
    location: 'Woldia, Ethiopia',
    startDate: '2023-09-01',
    endDate: '2026-10-01',
    description: [
      'Built a full-stack cooperative management platform as a final year graduation project — replacing paper-based processes for an employees\' savings and credit cooperative.',
      'Architected role-based access control with Spring Security and JWT across 5 roles (Manager, Loan Officer, Accountant, Auditor, Member).',
      'Designed a FIFO loan lifecycle engine covering application, approval, collateral validation, disbursement, repayment with interest calculation, and early settlement.',
      'Implemented a dual-write financial ledger: every transaction writes to both the member account and the cooperative general ledger in the same DB transaction.',
      'Integrated MinIO object storage with presigned URL generation for collateral files, member KYC documents, and loan agreements.',
      'Delivered paginated financial reports with real-time PostgreSQL aggregation — ~25 REST controllers, 24 Flyway migrations, ~40 frontend pages.',
    ],
    technologies: ['Java 17', 'Spring Boot 3', 'Spring Security', 'JWT', 'Spring Data JPA', 'PostgreSQL', 'Flyway', 'Next.js 14', 'TypeScript', 'Redux Toolkit', 'MinIO'],
  },
  {
    id: 'exp-legalcase',
    role: 'Independent Software Developer',
    company: 'Personal Project',
    location: 'Woldia, Ethiopia',
    startDate: '2023-01-01',
    description: [
      'Designed and built LegalCase — a full-stack SaaS platform for Ethiopian law firms combining a Flutter mobile app, Node.js REST API, and React admin panel.',
      'Implemented alarm-style hearing notifications using flutter_local_notifications with USE_EXACT_ALARM + BOOT_COMPLETED receiver, ensuring reminders fire even when the app is killed.',
      'Integrated Chapa (Ethiopian payment gateway) with free-trial enforcement and a subscription guard middleware that returns 402 to trigger the mobile paywall.',
      'Delivered bilingual UI (English & Amharic), dark mode, and a monorepo architecture with a GitHub Actions CI pipeline.',
    ],
    technologies: ['Flutter', 'Dart', 'Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'Knex.js', 'React', 'Docker', 'GitHub Actions', 'Chapa'],
  },
]
