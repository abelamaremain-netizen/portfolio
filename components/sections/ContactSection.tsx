'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { contactSchema, type ContactRequest } from '@/lib/validations/contact'
import { Button } from '@/components/ui/Button'

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactRequest>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data: ContactRequest) {
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (res.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
        setErrorMessage(json.error ?? 'Something went wrong')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network error — please try again')
    }
  }

  const inputClass =
    'w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary'
  const errorClass = 'text-xs text-destructive mt-1'

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">Get in Touch</h2>
          <div className="w-12 h-1 bg-primary rounded mb-4" />
          <p className="text-muted-foreground mb-8 max-w-lg">
            Open to new opportunities and collaborations. Send me a message and I&apos;ll get back to you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-lg"
        >
          {/* Success toast */}
          {status === 'success' && (
            <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
              <CheckCircle size={18} />
              <span className="text-sm font-medium">Message sent! I&apos;ll get back to you soon.</span>
            </div>
          )}
          {/* Error toast */}
          {status === 'error' && (
            <div className="flex items-center gap-2 bg-destructive/10 text-destructive border border-destructive/20 rounded-lg p-4 mb-6">
              <AlertCircle size={18} />
              <span className="text-sm font-medium">{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
              <input id="name" {...register('name')} placeholder="Your name" className={inputClass} />
              {errors.name && <p className={errorClass}>{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
              <input id="email" type="email" {...register('email')} placeholder="your@email.com" className={inputClass} />
              {errors.email && <p className={errorClass}>{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                Subject <span className="text-muted-foreground">(optional)</span>
              </label>
              <input id="subject" {...register('subject')} placeholder="What's this about?" className={inputClass} />
              {errors.subject && <p className={errorClass}>{errors.subject.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
              <textarea
                id="message"
                {...register('message')}
                placeholder="Your message..."
                rows={5}
                className={`${inputClass} resize-none`}
              />
              {errors.message && <p className={errorClass}>{errors.message.message}</p>}
            </div>
            <Button type="submit" size="lg" className="w-full" disabled={status === 'submitting'}>
              {status === 'submitting' ? (
                'Sending…'
              ) : (
                <>
                  <Send size={16} className="mr-2" /> Send Message
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
