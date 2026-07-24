import { Resend } from 'resend'
import type { ContactRequest } from '@/lib/validations/contact'

/**
 * Sends a contact form email using the Resend API.
 * Requires EMAIL_API_KEY environment variable.
 * Never throws — returns { ok: false, error } on failure.
 */
export async function sendContactEmail(
  payload: ContactRequest
): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.EMAIL_API_KEY

  if (!apiKey) {
    return { ok: false, error: 'Email service not configured' }
  }

  try {
    const resend = new Resend(apiKey)

    await resend.emails.send({
      from: 'portfolio@abelamare.dev',
      to: 'abel@abelamare.dev',
      subject: payload.subject ?? `Portfolio contact from ${payload.name}`,
      text: `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`,
      html: `
        <h2>New contact from portfolio</h2>
        <p><strong>Name:</strong> ${payload.name}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        ${payload.subject ? `<p><strong>Subject:</strong> ${payload.subject}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${payload.message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return { ok: true }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to send message'
    return { ok: false, error: message }
  }
}
