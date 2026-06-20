import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import EmailCapture from '@/components/EmailCapture'
import { getArticleRaw, getArticlesByCategory, mdxToHtml } from '@/lib/mdx'
import styles from './page.module.css'

const VALID_CATEGORIES = ['before-you-go', 'first-90-days', 'work-and-money'] as const
type Category = (typeof VALID_CATEGORIES)[number]

const CATEGORY_NAMES: Record<Category, string> = {
  'before-you-go': 'Before You Go',
  'first-90-days': 'First 90 Days',
  'work-and-money': 'Work & Money',
}

export function generateStaticParams() {
  return VALID_CATEGORIES.flatMap(category =>
    getArticlesByCategory(category).map(article => ({
      category,
      slug: article.slug,
    }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>
}): Promise<Metadata> {
  const { category, slug } = await params
  const article = getArticleRaw(category, slug)
  if (!article) return {}
  const url = `https://canadasurvivalguide.com/${category}/${slug}`
  return {
    title: article.meta.title,
    description: article.meta.description,
    alternates: { canonical: url },
    authors: [{ name: 'Canada Survival Guide', url: 'https://canadasurvivalguide.com' }],
    openGraph: {
      type: 'article',
      url,
      title: article.meta.title,
      description: article.meta.description,
      publishedTime: article.meta.date,
      modifiedTime: article.meta.date,
      siteName: 'Canada Survival Guide',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.meta.title,
      description: article.meta.description,
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>
}) {
  const { category, slug } = await params
  if (!VALID_CATEGORIES.includes(category as Category)) notFound()

  const article = getArticleRaw(category, slug)
  if (!article) notFound()

  const { meta, content } = article
  const html = await mdxToHtml(content)
  const categoryName = CATEGORY_NAMES[category as Category]
  const related = getArticlesByCategory(category).filter(a => a.slug !== slug).slice(0, 4)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    dateModified: meta.date,
    author: {
      '@type': 'Organization',
      name: 'Canada Survival Guide',
      url: 'https://canadasurvivalguide.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Canada Survival Guide',
      url: 'https://canadasurvivalguide.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://canadasurvivalguide.com/${category}/${slug}`,
    },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://canadasurvivalguide.com' },
      { '@type': 'ListItem', position: 2, name: categoryName, item: `https://canadasurvivalguide.com/${category}` },
      { '@type': 'ListItem', position: 3, name: meta.title, item: `https://canadasurvivalguide.com/${category}/${slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.sep}>›</span>
            <Link href={`/${category}`}>{categoryName}</Link>
            <span className={styles.sep}>›</span>
            <span>{meta.title}</span>
          </nav>
          <h1 className={styles.heroTitle}>{meta.title}</h1>
          {meta.readTime && <p className={styles.heroMeta}>{meta.readTime}</p>}
        </div>
      </section>

      <div className={styles.layout}>
        <article className={styles.article}>
          <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
          <div className={styles.articleCapture}>
            <EmailCapture />
          </div>
        </article>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarSticky}>
            {related.length > 0 && (
              <div className={styles.sidebarSection}>
                <p className={styles.sidebarLabel}>More in {categoryName}</p>
                <ul className={styles.relatedList}>
                  {related.map(a => (
                    <li key={a.slug}>
                      <Link href={`/${category}/${a.slug}`} className={styles.relatedLink}>
                        <span className={styles.relatedTitle}>{a.title}</span>
                        <span className={styles.relatedTime}>{a.readTime}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className={styles.sidebarCapture}>
              <EmailCapture />
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </>
  )
}
