'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Scroll-spy hook that tracks which section is currently in view.
 * Uses IntersectionObserver with threshold 0.5 and -80px top rootMargin
 * to account for the sticky navigation bar height.
 *
 * @param sectionIds - Array of DOM element IDs to observe
 * @returns The ID of the currently active/visible section
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current?.disconnect()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      {
        threshold: 0.5,
        rootMargin: '-80px 0px 0px 0px',
      }
    )

    const observer = observerRef.current

    for (const id of sectionIds) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }

    return () => {
      observer.disconnect()
    }
  }, [sectionIds])

  return activeId
}
