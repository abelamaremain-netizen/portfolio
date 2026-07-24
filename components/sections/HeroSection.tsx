'use client'

import Image from 'next/image'
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: shouldReduceMotion ? {} : { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: shouldReduceMotion ? {} : { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 pb-12 px-4"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p variants={itemVariants} className="text-primary font-medium mb-2">
              Hi, I&apos;m
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            >
              Abel Amare
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6"
            >
              Full-Stack Software Engineer
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Recent Software Engineering graduate from Woldia University. I build end-to-end
              products — Flutter mobile apps, Spring Boot APIs, and Next.js web apps. Open to
              backend, full-stack, or mobile roles.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <Button href="#projects" size="lg">
                View Projects <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Get in Touch
              </Button>
              <Button href="/resume.pdf" variant="ghost" size="lg" external>
                <Download size={16} className="mr-2" /> Resume
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="https://github.com/abelamaremain-netizen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://linkedin.com/in/abelamare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:abelamaremain@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div variants={itemVariants} className="flex-shrink-0">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
              <Image
                src="/images/avatar.jpg"
                alt="Abel Amare"
                fill
                priority
                className="rounded-full object-cover border-4 border-primary/20"
                sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 288px"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
