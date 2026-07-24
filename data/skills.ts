export interface Skill {
  name: string
  iconSrc?: string
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
}

export interface SkillCategory {
  name: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Mobile',
    skills: [
      { name: 'Flutter', level: 'expert' },
      { name: 'Dart', level: 'expert' },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'Next.js', level: 'expert' },
      { name: 'React', level: 'expert' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'Tailwind CSS', level: 'advanced' },
      { name: 'Redux Toolkit', level: 'advanced' },
      { name: 'Framer Motion', level: 'intermediate' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 'expert' },
      { name: 'Express', level: 'expert' },
      { name: 'Java 17', level: 'advanced' },
      { name: 'Spring Boot 3', level: 'advanced' },
      { name: 'Spring Security', level: 'advanced' },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 'expert' },
      { name: 'Knex.js', level: 'advanced' },
      { name: 'Spring Data JPA', level: 'advanced' },
      { name: 'Flyway', level: 'advanced' },
    ],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      { name: 'Docker', level: 'advanced' },
      { name: 'Docker Compose', level: 'advanced' },
      { name: 'GitHub Actions', level: 'advanced' },
      { name: 'Maven', level: 'intermediate' },
      { name: 'Git', level: 'expert' },
    ],
  },
  {
    name: 'Payments & APIs',
    skills: [
      { name: 'Chapa', level: 'advanced' },
      { name: 'JWT', level: 'expert' },
      { name: 'REST APIs', level: 'expert' },
    ],
  },
  {
    name: 'Languages',
    skills: [
      { name: 'TypeScript', level: 'expert' },
      { name: 'Dart', level: 'expert' },
      { name: 'Java', level: 'advanced' },
      { name: 'JavaScript', level: 'expert' },
    ],
  },
]
