import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { calculateReadingTime } from '@/lib/reading-time'

export interface BlogPost {
  slug: string
  title: string
  summary: string
  publishedAt: string
  tags: string[]
  coverImage?: string
  readingTimeMinutes: number
  draft?: boolean
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

function ensureBlogDir(): boolean {
  try {
    return fs.existsSync(BLOG_DIR)
  } catch {
    return false
  }
}

/**
 * Returns all published blog posts sorted by publishedAt descending.
 * Drafts are excluded in production.
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  if (!ensureBlogDir()) return []

  try {
    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))

    const posts = files.map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const filePath = path.join(BLOG_DIR, filename)
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(raw)

      return {
        slug,
        title: data.title as string,
        summary: data.summary as string,
        publishedAt: data.publishedAt as string,
        tags: (data.tags as string[]) ?? [],
        coverImage: data.coverImage as string | undefined,
        readingTimeMinutes: calculateReadingTime(content),
        draft: data.draft as boolean | undefined,
      } satisfies BlogPost
    })

    const isProduction = process.env.NODE_ENV === 'production'
    const filtered = isProduction ? posts.filter((p) => !p.draft) : posts

    return filtered.sort((a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
  } catch {
    return []
  }
}

/**
 * Returns a single post by slug including its raw MDX content, or null if not found.
 * Never throws.
 */
export async function getPostBySlug(
  slug: string
): Promise<(BlogPost & { content: string }) | null> {
  if (!slug || !ensureBlogDir()) return null

  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
    if (!fs.existsSync(filePath)) return null

    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(raw)

    return {
      slug,
      title: data.title as string,
      summary: data.summary as string,
      publishedAt: data.publishedAt as string,
      tags: (data.tags as string[]) ?? [],
      coverImage: data.coverImage as string | undefined,
      readingTimeMinutes: calculateReadingTime(content),
      draft: data.draft as boolean | undefined,
      content,
    }
  } catch {
    return null
  }
}
