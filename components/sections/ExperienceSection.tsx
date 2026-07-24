'use client'

import { motion } from 'framer-motion'
import { ExperienceTimeline } from '@/components/ui/ExperienceTimeline'
import { experiences } from '@/data/experience'

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">Experience</h2>
          <div className="w-12 h-1 bg-primary rounded mb-8" />
        </motion.div>
        <ExperienceTimeline experiences={experiences} />
      </div>
    </section>
  )
}
