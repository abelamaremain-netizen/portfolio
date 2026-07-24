import Link from 'next/link'
import type { BlogPost } from '@/lib/data/blog'

interface PostCardProps {
  post: BlogPost
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-card rounded-xl border border-border p-5 hover:border-primary/50 transition-colors"
    >
      <div className="flex flex-wrap gap-1.5 mb-3">
        {post.tags.map((tag) => (
          <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
        {post.title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{post.summary}</p>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>
          {new Date(post.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </span>
        <span>{post.readingTimeMinutes} min read</span>
      </div>
    </Link>
  )
}
