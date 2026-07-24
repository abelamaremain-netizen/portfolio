interface SkillBadgeProps {
  name: string
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
}

const levelColors = {
  beginner: 'bg-muted text-muted-foreground',
  intermediate: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  advanced: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  expert: 'bg-primary/10 text-primary',
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  const colorClass = level ? levelColors[level] : 'bg-muted text-muted-foreground'
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colorClass}`}>
      {name}
    </span>
  )
}
