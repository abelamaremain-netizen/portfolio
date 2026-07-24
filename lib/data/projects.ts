import { projects, type Project } from '@/data/projects'

export type { Project }

/**
 * Returns all projects sorted: featured first, then by insertion order.
 */
export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => {
    if (a.featured === b.featured) return 0
    return a.featured ? -1 : 1
  })
}

/**
 * Returns only featured projects, optionally limited to `limit` items.
 */
export function getFeaturedProjects(limit?: number): Project[] {
  const featured = projects.filter((p) => p.featured)
  return limit !== undefined ? featured.slice(0, limit) : featured
}

/**
 * Filter projects by selected tags (OR logic — project must match at least one tag).
 * If selectedTags is empty, returns all projects.
 */
export function filterProjects(allProjects: Project[], selectedTags: Set<string>): Project[] {
  if (selectedTags.size === 0) return allProjects
  return allProjects.filter((p) => p.tags.some((t) => selectedTags.has(t)))
}
