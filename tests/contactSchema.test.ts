import { describe, it, expect } from 'vitest'
import { contactSchema } from '@/lib/validations/contact'

describe('contactSchema', () => {
  it('accepts a valid payload', () => {
    const result = contactSchema.safeParse({
      name: 'Abel Amare',
      email: 'abel@example.com',
      subject: 'Job opportunity',
      message: 'Hello, I would like to discuss a full-stack role.',
    })
    expect(result.success).toBe(true)
  })

  it('accepts a payload without optional subject', () => {
    const result = contactSchema.safeParse({
      name: 'Abel',
      email: 'abel@example.com',
      message: 'This is a message with enough characters.',
    })
    expect(result.success).toBe(true)
  })

  it('rejects missing name', () => {
    const result = contactSchema.safeParse({ email: 'abel@example.com', message: 'Hello there' })
    expect(result.success).toBe(false)
  })

  it('rejects missing email', () => {
    const result = contactSchema.safeParse({ name: 'Abel', message: 'Hello there world' })
    expect(result.success).toBe(false)
  })

  it('rejects missing message', () => {
    const result = contactSchema.safeParse({ name: 'Abel', email: 'abel@example.com' })
    expect(result.success).toBe(false)
  })

  it('rejects name that is too short', () => {
    const result = contactSchema.safeParse({ name: 'A', email: 'abel@example.com', message: 'Hello world message here' })
    expect(result.success).toBe(false)
  })

  it('rejects invalid email format', () => {
    const result = contactSchema.safeParse({ name: 'Abel', email: 'not-an-email', message: 'Hello world message here' })
    expect(result.success).toBe(false)
  })

  it('rejects message that is too short', () => {
    const result = contactSchema.safeParse({ name: 'Abel', email: 'abel@example.com', message: 'Hi' })
    expect(result.success).toBe(false)
  })
})
