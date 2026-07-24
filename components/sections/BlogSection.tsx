'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PostCard } from '@/components/ui/PostCard'
import type { BlogPost } from '@/lib/data/blog'

interface BlogSectionProps {
  posts: BlogPost[]
}

export function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Blog</h2>
            <div className="w-12 h-1 bg-primary rounded" />
          </div>
          {posts.length > 3 && (
            <Link
              href="/blog"
              className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
            >
              View all →
            </Link>
          )}
        </motion.div>

        {posts.length === 0 ? (
          <p className="text-muted-foreground">No posts yet — check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(0, 3).map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <PostCard post={post} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
