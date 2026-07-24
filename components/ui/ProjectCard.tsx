'use client'

import Image from 'next/image'
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative h-48 bg-muted">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
        {project.featured && (
          <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-lg text-foreground mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

        {/* Tech stack chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-muted text-muted-foreground text-xs px-2 py-0.5 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights toggle */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-4">
            <button
              onClick={() => setExpanded((e) => !e)}
              className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors font-medium"
            >
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              {expanded ? 'Hide highlights' : 'Show highlights'}
            </button>
            {expanded && (
              <ul className="mt-3 space-y-1.5">
                {project.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-muted-foreground flex gap-2">
                    <span className="text-primary mt-0.5">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Links */}
        <div className="flex items-center gap-3 mt-auto pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink size={14} /> Live
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={14} /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
