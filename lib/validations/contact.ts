import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be at most 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().max(200, 'Subject must be at most 200 characters').optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message must be at most 2000 characters'),
})

export type ContactRequest = z.infer<typeof contactSchema>
