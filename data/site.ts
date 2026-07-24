export interface SiteMetadata {
  title: string
  description: string
  url: string
  ogImage: string
  twitterHandle: string
  author: string
}

export const siteMetadata: SiteMetadata = {
  title: 'Abel Amare — Full-Stack Software Engineer',
  description:
    'Portfolio of Abel Amare, a recent Software Engineering graduate specialising in Flutter, Node.js, Java Spring Boot, and Next.js. Open to backend, full-stack, and mobile roles.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portfolio-abelamaremain.vercel.app',
  ogImage: '/images/og-default.png',
  twitterHandle: '@abelamare',
  author: 'Abel Amare',
}
