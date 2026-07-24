import type { WorkExperience } from '@/data/experience'

interface ExperienceTimelineProps {
  experiences: WorkExperience[]
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <ol className="relative border-l border-border ml-4">
      {experiences.map((exp) => (
        <li key={exp.id} className="mb-10 ml-6">
          {/* Dot */}
          <span className="absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary ring-4 ring-background" />

          <div className="bg-card rounded-xl border border-border p-5">
            <p className="text-xs text-muted-foreground mb-1">
              {formatDate(exp.startDate)} — {exp.endDate ? formatDate(exp.endDate) : 'Present'}
              {exp.location && <span> · {exp.location}</span>}
            </p>
            <h3 className="font-bold text-foreground text-base">{exp.role}</h3>
            <p className="text-primary font-medium text-sm mb-3">{exp.company}</p>
            <ul className="space-y-1.5 mb-4">
              {exp.description.map((point, i) => (
                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {exp.technologies.map((tech) => (
                <span key={tech} className="bg-muted text-muted-foreground text-xs px-2 py-0.5 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}
