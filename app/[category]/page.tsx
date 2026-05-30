import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getArticlesByCategory } from '@/lib/mdx'
import styles from './page.module.css'

const VALID_CATEGORIES = ['before-you-go', 'first-90-days', 'work-and-money'] as const
type Category = (typeof VALID_CATEGORIES)[number]

const CATEGORY_META: Record<Category, { name: string; description: string; stage: string }> = {
  'before-you-go': {
    name: 'Before You Go',
    description: 'Trámites, documents, banking setup — everything to do before you board the plane.',
    stage: 'Stage 01',
  },
  'first-90-days': {
    name: 'First 90 Days',
    description: 'SIN number, apartment hunting, cell plan, and surviving your first winter.',
    stage: 'Stage 02',
  },
  'work-and-money': {
    name: 'Work & Money',
    description: 'How Canadian taxes work, workplace culture differences, and improving your English fast.',
    stage: 'Stage 03',
  },
}

export function generateStaticParams() {
  return VALID_CATEGORIES.map(category => ({ category }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params
  const meta = CATEGORY_META[category as Category]
  if (!meta) return {}
  return {
    title: `${meta.name} — Canada Survival Guide`,
    description: meta.description,
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  if (!VALID_CATEGORIES.includes(category as Category)) notFound()

  const meta = CATEGORY_META[category as Category]
  const articles = getArticlesByCategory(category)

  return (
    <>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.stage}>{meta.stage}</p>
          <h1 className={styles.heroTitle}>{meta.name}</h1>
          <p className={styles.heroDesc}>{meta.description}</p>
        </div>
      </section>

      <main className={styles.main}>
        {articles.length === 0 ? (
          <p style={{ color: 'var(--ink-3)', fontSize: '14px' }}>No articles yet — check back soon.</p>
        ) : (
          <div className={styles.grid}>
            {articles.map(article => (
              <Link
                key={article.slug}
                href={`/${category}/${article.slug}`}
                className={styles.card}
              >
                <div className={styles.cardBody}>
                  <h2 className={styles.cardTitle}>{article.title}</h2>
                  {article.description && (
                    <p className={styles.cardDesc}>{article.description}</p>
                  )}
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.readTime}>{article.readTime}</span>
                  <span className={styles.readMore}>Read →</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}
