import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'

const contentDir = path.join(process.cwd(), 'content')

export type ArticleMeta = {
  slug: string
  category: string
  title: string
  description: string
  date: string
  readTime: string
}

export function getArticlesByCategory(category: string): ArticleMeta[] {
  const dir = path.join(contentDir, category)
  if (!fs.existsSync(dir)) return []

  return fs
    .readdirSync(dir)
    .filter(f => f.endsWith('.mdx'))
    .map(filename => {
      const slug = filename.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(dir, filename), 'utf8')
      const { data } = matter(raw)
      return {
        slug,
        category,
        title: data.title ?? slug,
        description: data.description ?? '',
        date: data.date ?? '',
        readTime: data.readTime ?? '5 min read',
      }
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getArticleRaw(category: string, slug: string) {
  const filePath = path.join(contentDir, category, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return { meta: data as ArticleMeta, content }
}

export function getAllArticles(): ArticleMeta[] {
  const categories = ['before-you-go', 'first-90-days', 'work-and-money']
  return categories.flatMap(cat => getArticlesByCategory(cat))
}

export async function mdxToHtml(content: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content)
  return result.toString()
}
