import type { Metadata } from 'next'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { getAllProjects } from '@/lib/data/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Full-stack projects built by Abel Amare — LegalCase, Cooperative Management System, and more.',
}

export default function ProjectsPage() {
  const projects = getAllProjects()
  return (
    <div className="pt-16">
      <ProjectsSection projects={projects} />
    </div>
  )
}
