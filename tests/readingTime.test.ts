import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'
import { calculateReadingTime } from '@/lib/reading-time'

describe('calculateReadingTime — Property 6: Reading Time Minimum', () => {
  it('always returns at least 1 for any non-empty string', () => {
    fc.assert(
      fc.property(fc.string({ minLength: 1 }), (content) => {
        return calculateReadingTime(content) >= 1
      })
    )
  })

  it('is deterministic — same input always produces same output', () => {
    fc.assert(
      fc.property(fc.string({ minLength: 1 }), (content) => {
        return calculateReadingTime(content) === calculateReadingTime(content)
      })
    )
  })

  it('returns integer values only', () => {
    fc.assert(
      fc.property(fc.string({ minLength: 1 }), (content) => {
        const result = calculateReadingTime(content)
        return Number.isInteger(result)
      })
    )
  })
})
