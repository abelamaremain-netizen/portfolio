# Tasks

## Task 1: Project Scaffold & Configuration
- [x] 1.1 Initialise Next.js 14 project with TypeScript and Tailwind CSS in the workspace root (`C:\Users\HP\Desktop\portfolio`)
- [x] 1.2 Install all dependencies: framer-motion, zod, react-hook-form, resend, @vercel/og, lucide-react, next-mdx-remote, fast-check, vitest, @playwright/test
- [x] 1.3 Configure tsconfig.json path aliases (@/ → src/ or root)
- [x] 1.4 Configure tailwind.config.ts with dark mode class strategy and custom theme tokens
- [x] 1.5 Configure next.config.ts with MDX support and Content Security Policy headers

## Task 2: Data Layer
- [x] 2.1 Create `data/site.ts` with SiteMetadata for Abel Amare
- [x] 2.2 Create `data/projects.ts` with full LegalCase and Cooperative Management System project entries matching design.md
- [x] 2.3 Create `data/experience.ts` with WorkExperience[] (placeholder entries Abel can fill)
- [x] 2.4 Create `data/skills.ts` with all skill categories from design.md

## Task 3: Lib Layer
- [x] 3.1 Create `lib/validations/contact.ts` with contactSchema (Zod)
- [x] 3.2 Create `lib/reading-time.ts` with calculateReadingTime()
- [x] 3.3 Create `lib/data/projects.ts` with getAllProjects() and getFeaturedProjects()
- [x] 3.4 Create `lib/data/blog.ts` with getAllPosts() and getPostBySlug()
- [x] 3.5 Create `lib/email.ts` with sendContactEmail() using Resend

## Task 4: Hooks
- [x] 4.1 Create `hooks/useActiveSection.ts` (IntersectionObserver scroll-spy per design pseudocode)
- [x] 4.2 Create `hooks/useTheme.ts` (dark/light toggle with localStorage persistence)

## Task 5: UI Components — Layout
- [x] 5.1 Create `components/layout/NavBar.tsx` with desktop nav, mobile hamburger, dark-mode toggle, active section highlight
- [x] 5.2 Create `components/layout/Footer.tsx`
- [x] 5.3 Create `components/ui/Button.tsx`
- [x] 5.4 Create `components/ui/ThemeToggle.tsx`
- [x] 5.5 Create `components/ui/SkillBadge.tsx`

## Task 6: UI Components — Sections
- [x] 6.1 Create `components/sections/HeroSection.tsx` with Framer Motion entrance, avatar, CTA buttons, social links
- [x] 6.2 Create `components/sections/AboutSection.tsx`
- [x] 6.3 Create `components/sections/SkillsSection.tsx` with grouped skill categories
- [x] 6.4 Create `components/ui/ProjectCard.tsx` with tech stack chips, highlights list, featured badge
- [x] 6.5 Create `components/sections/ProjectsSection.tsx` with tag filter client component
- [x] 6.6 Create `components/ui/ExperienceTimeline.tsx`
- [x] 6.7 Create `components/sections/ExperienceSection.tsx`
- [x] 6.8 Create `components/sections/ContactSection.tsx` with react-hook-form, Zod validation, submitting/success/error states
- [x] 6.9 Create `components/ui/PostCard.tsx`
- [x] 6.10 Create `components/sections/BlogSection.tsx`

## Task 7: App Pages & Layout
- [x] 7.1 Create `app/layout.tsx` with ThemeProvider, NavBar, Footer, next/font
- [x] 7.2 Create `app/page.tsx` composing all sections (Home — single page)
- [x] 7.3 Create `app/projects/page.tsx` with SSG and metadata
- [x] 7.4 Create `app/blog/page.tsx` (blog index with SSG)
- [x] 7.5 Create `app/blog/[slug]/page.tsx` with generateStaticParams, generateMetadata, MDX rendering
- [x] 7.6 Create `app/globals.css` with Tailwind base, CSS variables for dark/light theme colors

## Task 8: API Routes
- [x] 8.1 Create `app/api/contact/route.ts` (POST handler with Zod validation and sendContactEmail)
- [x] 8.2 Create `app/api/og/route.tsx` (OG image generation with @vercel/og)

## Task 9: SEO & Static Assets
- [x] 9.1 Add `app/sitemap.ts` generating sitemap from pages + blog posts
- [x] 9.2 Add `app/robots.ts`
- [x] 9.3 Add placeholder `public/resume.pdf` and `public/images/` directory with project image placeholders

## Task 10: Sample Blog Content
- [x] 10.1 Create `content/blog/` directory with one sample MDX post (demonstrates the blog works)

## Task 11: Tests
- [x] 11.1 Configure Vitest (`vitest.config.ts`)
- [x] 11.2 Write property-based tests for filterProjects (subset + intersection properties)
- [x] 11.3 Write property-based tests for calculateReadingTime (result ≥ 1 for non-empty input)
- [x] 11.4 Write unit tests for contactSchema (valid payloads pass, missing fields fail)
- [x] 11.5 Write unit tests for getPostBySlug (null return for unknown slug, required fields present when found)
