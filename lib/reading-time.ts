/**
 * Calculates estimated reading time for MDX/Markdown content.
 * Strips markdown syntax before counting words.
 * Returns at minimum 1 minute.
 */
export function calculateReadingTime(content: string): number {
  const WORDS_PER_MINUTE = 200

  // Strip common markdown/MDX syntax
  const plainText = content
    .replace(/```[\s\S]*?```/g, '')   // code blocks
    .replace(/`[^`]*`/g, '')           // inline code
    .replace(/!\[.*?\]\(.*?\)/g, '')   // images
    .replace(/\[.*?\]\(.*?\)/g, '')    // links
    .replace(/#{1,6}\s/g, '')          // headings
    .replace(/[*_~>]/g, '')            // emphasis, blockquote
    .replace(/---/g, '')               // hr
    .replace(/\s+/g, ' ')
    .trim()

  const wordCount = plainText.split(/\s+/).filter((w) => w.length > 0).length
  return Math.max(Math.ceil(wordCount / WORDS_PER_MINUTE), 1)
}
