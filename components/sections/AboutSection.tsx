'use client'

import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">About Me</h2>
          <div className="w-12 h-1 bg-primary rounded mb-8" />
          <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a recent Software Engineering graduate from Woldia University, Ethiopia,
              with hands-on experience building production-ready, full-stack systems from scratch.
            </p>
            <p>
              During my studies I shipped a complete Cooperative Management System — a full-stack
              platform that replaced paper-based processes for a savings &amp; credit cooperative,
              built with Spring Boot, Next.js, and PostgreSQL.
            </p>
            <p>
              I care about clean architecture, real-world correctness, and software that actually
              solves the problem at hand. Currently open to backend or full-stack roles.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
