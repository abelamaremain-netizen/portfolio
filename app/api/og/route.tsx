import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title')?.slice(0, 100) ?? 'Abel Amare'

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '60px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <p style={{ color: '#3b82f6', fontSize: 20, fontWeight: 600, marginBottom: 16 }}>
          abelamare.dev
        </p>
        <h1 style={{ color: '#f8fafc', fontSize: 52, fontWeight: 800, lineHeight: 1.2, maxWidth: 900 }}>
          {title}
        </h1>
        <p style={{ color: '#94a3b8', fontSize: 22, marginTop: 24 }}>
          Full-Stack Software Engineer
        </p>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
