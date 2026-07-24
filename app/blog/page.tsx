import type { Metadata } from 'next'
import { PostCard } from '@/components/ui/PostCard'
import { getAllPosts } from '@/lib/data/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Technical writing and thoughts from Abel Amare.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="pt-16 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-2">Blog</h1>
        <div className="w-12 h-1 bg-primary rounded mb-10" />
        {posts.length === 0 ? (
          <p className="text-muted-foreground">No posts yet — check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
