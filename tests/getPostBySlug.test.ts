import { describe, it, expect } from 'vitest'
import { getPostBySlug, getAllPosts } from '@/lib/data/blog'

describe('getPostBySlug', () => {
  it('returns null for an unknown slug', async () => {
    const post = await getPostBySlug('this-slug-does-not-exist-xyz-abc-123')
    expect(post).toBeNull()
  })

  it('never throws for any string input', async () => {
    const inputs = ['', 'valid-slug', '../traversal', 'a'.repeat(200), '!@#$%']
    for (const slug of inputs) {
      await expect(getPostBySlug(slug)).resolves.not.toThrow()
    }
  })
})

describe('getAllPosts', () => {
  it('returns an array (never throws)', async () => {
    const posts = await getAllPosts()
    expect(Array.isArray(posts)).toBe(true)
  })

  it('each post has required fields when posts exist', async () => {
    const posts = await getAllPosts()
    for (const post of posts) {
      expect(typeof post.slug).toBe('string')
      expect(typeof post.title).toBe('string')
      expect(typeof post.summary).toBe('string')
      expect(typeof post.publishedAt).toBe('string')
      expect(Array.isArray(post.tags)).toBe(true)
      expect(typeof post.readingTimeMinutes).toBe('number')
      expect(post.readingTimeMinutes).toBeGreaterThanOrEqual(1)
    }
  })
})
