'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'experience', 'blog', 'contact']

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="#hero" className="font-bold text-lg text-foreground hover:text-primary transition-colors">
          Abel Amare
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => {
            const sectionId = href.replace('#', '')
            const isActive = activeId === sectionId
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="flex flex-col px-4 py-4 gap-4">
            {NAV_LINKS.map(({ label, href }) => {
              const sectionId = href.replace('#', '')
              const isActive = activeId === sectionId
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-base font-medium transition-colors hover:text-primary ${
                      isActive ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
