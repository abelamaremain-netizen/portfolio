import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'
import { filterProjects } from '@/lib/data/projects'
import type { Project } from '@/data/projects'

function arbitraryProject(): fc.Arbitrary<Project> {
  return fc.record({
    id: fc.uuid(),
    title: fc.string({ minLength: 1, maxLength: 50 }),
    description: fc.string({ minLength: 1, maxLength: 200 }),
    techStack: fc.array(fc.string({ minLength: 1, maxLength: 20 })),
    imageUrl: fc.constant('/placeholder.png'),
    featured: fc.boolean(),
    tags: fc.array(fc.string({ minLength: 1, maxLength: 15 }), { minLength: 1, maxLength: 5 }),
    highlights: fc.option(fc.array(fc.string({ minLength: 1 })), { nil: undefined }),
    liveUrl: fc.option(fc.webUrl(), { nil: undefined }),
    repoUrl: fc.option(fc.webUrl(), { nil: undefined }),
  })
}

describe('filterProjects — Property 5: Filter Is a Subset', () => {
  it('result is always a subset of input', () => {
    fc.assert(
      fc.property(fc.array(arbitraryProject()), fc.array(fc.string()), (projects, tagArray) => {
        const tags = new Set(tagArray)
        const result = filterProjects(projects, tags)
        return result.every((r) => projects.includes(r))
      })
    )
  })

  it('when tags is empty, returns all projects unchanged', () => {
    fc.assert(
      fc.property(fc.array(arbitraryProject()), (projects) => {
        const result = filterProjects(projects, new Set())
        return result.length === projects.length
      })
    )
  })

  it('every returned project has at least one matching tag when tag set is non-empty', () => {
    fc.assert(
      fc.property(fc.array(arbitraryProject()), fc.array(fc.string(), { minLength: 1 }), (projects, tagArray) => {
        const tags = new Set(tagArray)
        const result = filterProjects(projects, tags)
        return result.every((r) => r.tags.some((t) => tags.has(t)))
      })
    )
  })
})
