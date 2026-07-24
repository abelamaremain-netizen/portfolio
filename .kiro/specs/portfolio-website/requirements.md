# Requirements — Abel Amare Portfolio Website

## Overview

Requirements derived from `design.md` for a modern, SEO-optimised personal portfolio built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

---

### R1: Project Scaffold
**Validates:** Design section "Architecture"
- The project MUST be initialised as a Next.js 14 (App Router) application with TypeScript enabled
- Tailwind CSS MUST be configured as the primary styling solution
- ESLint MUST be configured with the Next.js recommended rule set
- `tsconfig.json` MUST include a path alias `@/` mapping to the project root (or `src/`) so internal imports use `@/` rather than relative paths
- `next.config.ts` MUST enable MDX support and configure Content Security Policy headers via the `headers()` function
- `tailwind.config.ts` MUST use the `class` dark-mode strategy and include custom theme tokens (colours, fonts, spacing) used across components

---

### R2: Data Layer
**Validates:** Design section "Real Project Data" and "Data Models"
- `data/site.ts` MUST export a `SiteMetadata` constant with Abel Amare's name, site URL, description, OG image path, and Twitter handle
- `data/projects.ts` MUST export a `Project[]` array containing at minimum the two featured projects:
  - **LegalCase** — id `legalcase`, with the exact `techStack`, `highlights`, `tags`, `featured: true`, and `imageUrl` specified in design.md
  - **Cooperative Management System** — id `cooperative-mgmt`, with the exact `techStack`, `highlights`, `tags`, `featured: true`, and `imageUrl` specified in design.md
  - Every project entry MUST conform to the `Project` interface (id, title, description, techStack, imageUrl, featured, tags; optional liveUrl, repoUrl, highlights)
- `data/skills.ts` MUST export a `SkillCategory[]` array covering all seven categories from design.md: Mobile, Frontend, Backend, Databases, DevOps & Tools, Payments & APIs, Languages — with the skills listed in each category
- `data/experience.ts` MUST export a `WorkExperience[]` array conforming to the `WorkExperience` interface; placeholder entries are acceptable if Abel has not yet provided real data

---

### R3: Lib Layer
**Validates:** Design section "Key Functions with Formal Specifications"
- `lib/validations/contact.ts` MUST export a Zod `contactSchema` with fields: `name` (string, min 2, max 100), `email` (string, email), `subject` (string, max 200, optional), `message` (string, min 10, max 2000); also export the inferred `ContactRequest` type
- `lib/reading-time.ts` MUST export `calculateReadingTime(content: string): number` which strips Markdown/MDX syntax, counts words, divides by 200 WPM, and returns `Math.max(Math.ceil(wordCount / 200), 1)`
- `lib/data/projects.ts` MUST export:
  - `getAllProjects(): Project[]` — returns all projects sorted featured-first, preserving insertion order within each group
  - `getFeaturedProjects(limit?: number): Project[]` — returns only projects where `featured === true`; if `limit` is provided the result length MUST be ≤ `limit`
- `lib/data/blog.ts` MUST export:
  - `getAllPosts(): Promise<BlogPost[]>` — reads MDX files from `content/blog/`, excludes drafts in production (`NODE_ENV === 'production'`), returns posts sorted by `publishedAt` descending
  - `getPostBySlug(slug: string): Promise<(BlogPost & { content: string }) | null>` — returns the matching post with MDX content string, or `null` if not found; MUST never throw
- `lib/email.ts` MUST export `sendContactEmail(payload: ContactRequest): Promise<{ ok: boolean; error?: string }>` which sends a transactional email via Resend (or SendGrid); MUST return `{ ok: false, error: string }` on failure rather than throwing; requires `EMAIL_API_KEY` environment variable

---

### R4: UI Components
**Validates:** Design section "Components and Interfaces"
- **NavBar** (`components/layout/NavBar.tsx`) — sticky top bar; renders desktop nav links and a mobile hamburger menu; highlights the active section via `useActiveSection`; includes a dark-mode toggle; accepts `NavBarProps` as defined in design.md
- **Footer** (`components/layout/Footer.tsx`) — site footer with copyright and social links
- **Button** (`components/ui/Button.tsx`) — reusable button/link component supporting primary and secondary visual variants
- **ThemeToggle** (`components/ui/ThemeToggle.tsx`) — icon button that toggles dark/light mode via `useTheme`
- **SkillBadge** (`components/ui/SkillBadge.tsx`) — small badge displaying a skill name with optional level indicator
- **HeroSection** (`components/sections/HeroSection.tsx`) — full-viewport section; renders name, title, tagline, avatar (via `next/image` with `priority`), CTA buttons, social links, and résumé download link; accepts `HeroProps` as defined in design.md
- **AboutSection** (`components/sections/AboutSection.tsx`) — biography with photo, highlights list; accepts `AboutProps`
- **SkillsSection** (`components/sections/SkillsSection.tsx`) — groups skills by category using `SkillBadge`; accepts `SkillsSectionProps`
- **ProjectCard** (`components/ui/ProjectCard.tsx`) — card showing project image, title, description, tech-stack chips, highlights, featured badge, and links; accepts `ProjectCardProps`
- **ProjectsSection** (`components/sections/ProjectsSection.tsx`) — client component with tag filter UI; renders a grid of `ProjectCard`; filter logic uses `filterProjects`; accepts `ProjectsSectionProps`
- **ExperienceTimeline** (`components/ui/ExperienceTimeline.tsx`) — vertical timeline rendering `WorkExperience[]`
- **ExperienceSection** (`components/sections/ExperienceSection.tsx`) — wraps `ExperienceTimeline`
- **ContactSection** (`components/sections/ContactSection.tsx`) — form with name, email, subject, message fields using `react-hook-form` + Zod client validation; displays submitting/success/error states and a toast notification
- **PostCard** (`components/ui/PostCard.tsx`) — blog post preview card with title, summary, date, tags, reading time; accepts `PostCardProps`
- **BlogSection** (`components/sections/BlogSection.tsx`) — grid of `PostCard` components

---

### R5: Hooks
**Validates:** Design section "Algorithmic Pseudocode — Active Section Detection"
- `hooks/useActiveSection.ts` MUST implement scroll-spy via `IntersectionObserver` (threshold 0.5, rootMargin `-80px 0px 0px 0px`); returns the ID of the currently visible section; disconnects the observer on unmount; initial value is the first element of `sectionIds`
- `hooks/useTheme.ts` MUST expose the current theme (`'dark' | 'light'`) and a toggle function; persists the preference to `localStorage`; reads the stored value on initial render and falls back to the OS `prefers-color-scheme` if no stored value exists

---

### R6: Pages
**Validates:** Design section "File / Directory Structure" and "Example Usage"
- `app/layout.tsx` MUST wrap all pages with `ThemeProvider`, `NavBar`, and `Footer`; MUST load fonts via `next/font`
- `app/globals.css` MUST include Tailwind base/components/utilities directives and CSS custom properties for dark/light colour tokens
- `app/page.tsx` (Home) MUST compose all page sections in order: Hero, About, Skills, Projects (featured), Experience, Blog (latest), Contact
- `app/projects/page.tsx` MUST render the full projects list with SSG (no `export const dynamic`); MUST export `metadata`
- `app/blog/page.tsx` MUST render all published blog posts as an index with SSG; MUST export `metadata`
- `app/blog/[slug]/page.tsx` MUST implement `generateStaticParams` (all post slugs), `generateMetadata` (title, description, OG image from `/api/og`), and render MDX content; MUST call `notFound()` if slug is unknown

---

### R7: API Routes
**Validates:** Design section "Contact Route Handler" and "Architecture"
- `app/api/contact/route.ts` MUST implement a `POST` handler that: parses the request body, validates it with `contactSchema`, returns `400` with error details on invalid input, calls `sendContactEmail` on valid input, returns `200 { ok: true }` on success, returns `500 { error }` on email failure
- `app/api/og/route.tsx` MUST implement a `GET` handler using `@vercel/og` (edge runtime) that accepts a `title` query parameter and returns a PNG OG image; parameter MUST be sanitised (no HTML/script injection)

---

### R8: SEO
**Validates:** Design section "Performance Considerations" and "generateMetadata"
- Every page MUST export a `metadata` object or `generateMetadata` function providing at minimum: `title`, `description`, and `openGraph.images`
- `app/sitemap.ts` MUST export a default function returning all static page URLs plus all published blog post URLs
- `app/robots.ts` MUST export a default function returning appropriate `allow`/`disallow` rules and the sitemap URL
- OG images MUST reference the `/api/og` route with the page title encoded as a query parameter

---

### R9: Contact Form
**Validates:** Design section "ContactSection" and "Contact Form Submission Flow"
- The contact form MUST be managed by `react-hook-form` with a Zod resolver
- Client-side validation MUST run before any network request is made
- The form MUST display three distinct UI states: `submitting` (button disabled, loading indicator), `success` (success toast, form reset), `error` (error message, form fields preserved so user can retry)
- On success the form fields MUST be reset to empty
- A toast notification MUST appear for both success and error outcomes

---

### R10: Dark Mode
**Validates:** Design section "NavBar — Toggle dark / light theme"
- `ThemeProvider` MUST apply a `dark` class to the `<html>` element when dark mode is active
- All colour tokens MUST be defined as CSS custom properties with separate values for `:root` (light) and `.dark` (dark) selectors in `globals.css`
- Theme preference MUST persist across page refreshes via `localStorage` key `theme`
- `ThemeToggle` MUST be accessible (keyboard operable, visible focus ring, aria-label describing current state)

---

### R11: Animations
**Validates:** Design section "HeroSection — Trigger entrance animations"
- `HeroSection` MUST use Framer Motion for entrance animation (fade-in + slide-up or equivalent) triggered on mount
- Each page section (About, Skills, Projects, Experience, Blog, Contact) MUST use a Framer Motion scroll-triggered reveal animation (e.g., `whileInView` with `once: true`)
- Animations MUST respect the `prefers-reduced-motion` media query — if the user has reduced motion enabled, animations MUST be skipped or minimised

---

### R12: Blog (MDX)
**Validates:** Design section "Dependencies — @next/mdx + next-mdx-remote"
- Blog posts MUST be authored as `.mdx` files in `content/blog/`
- Each MDX file MUST include frontmatter with: `title`, `summary`, `publishedAt` (YYYY-MM-DD), `tags`; `draft` and `coverImage` are optional
- Posts with `draft: true` MUST NOT appear in production builds
- Reading time MUST be calculated at build time using `calculateReadingTime` and included in the `BlogPost` object
- At least one sample MDX post MUST exist in `content/blog/` so the blog page renders correctly

---

### R13: Correctness Properties (Tests)
**Validates:** Design section "Correctness Properties" and "Testing Strategy"
- Vitest MUST be configured (`vitest.config.ts`) to run tests from `**/*.test.ts` and `**/*.spec.ts` files
- Property-based tests MUST be written with `fast-check` for:
  - `filterProjects` — the result is always a subset of the input array (Validates: Design "Property 5: Filter Is a Subset")
  - `filterProjects` — every returned project has at least one tag in the selected set when the set is non-empty (Validates: Design "Property 5: Filter Is a Subset")
  - `calculateReadingTime` — returns ≥ 1 for any non-empty string input (Validates: Design "Property 6: Reading Time Minimum")
- Unit tests MUST be written for:
  - `contactSchema` — valid payloads pass; payloads missing required fields fail (Validates: Design "Property 3: Contact Form Terminal State")
  - `getPostBySlug` — returns `null` for an unknown slug; when a post is found all required `BlogPost` fields are present (Validates: Design "Property 4: getPostBySlug Returns Complete Data or Null")

---

### R14: Performance
**Validates:** Design section "Performance Considerations"
- All content pages (Home, Projects, Blog index, Blog post) MUST use SSG — no `export const dynamic = 'force-dynamic'` on these routes
- `next/image` MUST be used for all images; the Hero avatar MUST include the `priority` prop
- Fonts MUST be loaded via `next/font` (Geist or Inter); `display: 'swap'` MUST be set
- MDX content MUST be compiled at build time, not at request time
- The OG image route MUST use the edge runtime (`export const runtime = 'edge'`)

---

### R15: Responsive Design
**Validates:** Design section "Overview — fully responsive"
- All layouts MUST be designed mobile-first using Tailwind responsive prefixes (`sm:`, `md:`, `lg:`)
- `NavBar` MUST render a hamburger/drawer menu on viewports narrower than `md` (768 px) and a horizontal link bar on `md` and above
- Section grids (Projects, Skills, Blog) MUST stack to a single column on mobile and expand to multi-column on larger screens
- Touch targets (buttons, links, nav items) MUST be at least 44 × 44 px on mobile
