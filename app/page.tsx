import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { BlogSection } from '@/components/sections/BlogSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { getAllProjects } from '@/lib/data/projects'
import { getAllPosts } from '@/lib/data/blog'

export default async function HomePage() {
  const projects = getAllProjects()
  const posts = await getAllPosts()

  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection projects={projects} />
      <ExperienceSection />
      <BlogSection posts={posts} />
      <ContactSection />
    </>
  )
}
