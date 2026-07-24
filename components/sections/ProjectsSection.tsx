'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { filterProjects } from '@/lib/data/projects'
import type { Project } from '@/data/projects'

interface ProjectsSectionProps {
  projects: Project[]
}

const ALL_TAG = 'all'

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort()
  const [selectedTag, setSelectedTag] = useState<string>(ALL_TAG)

  const filtered =
    selectedTag === ALL_TAG
      ? projects
      : filterProjects(projects, new Set([selectedTag]))

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">Projects</h2>
          <div className="w-12 h-1 bg-primary rounded mb-6" />

          {/* Tag filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setSelectedTag(ALL_TAG)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedTag === ALL_TAG
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors capitalize ${
                  selectedTag === tag
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
