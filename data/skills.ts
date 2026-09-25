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
    name: 'Frontend',
    skills: [
      { name: 'Next.js', level: 'expert' },
      { name: 'React', level: 'expert' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'Tailwind CSS', level: 'advanced' },
      { name: 'Framer Motion', level: 'intermediate' },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 'expert' },
      { name: 'Spring Data JPA', level: 'advanced' },
      { name: 'Flyway', level: 'advanced' },
    ],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      { name: 'Maven', level: 'intermediate' },
      { name: 'Git', level: 'expert' },
    ],
  },
  {
    name: 'APIs & Auth',
    skills: [
      { name: 'JWT', level: 'expert' },
      { name: 'REST APIs', level: 'expert' },
    ],
  },
  {
    name: 'Languages',
    skills: [
      { name: 'TypeScript', level: 'expert' },
      { name: 'Java', level: 'advanced' },
      { name: 'JavaScript', level: 'expert' },
    ],
  },
]
