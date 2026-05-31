import { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/mdx'

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles()

  const articleUrls = articles.map(article => ({
    url: `https://canadasurvivalguide.com/${article.category}/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://canadasurvivalguide.com',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: 'https://canadasurvivalguide.com/before-you-go',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: 'https://canadasurvivalguide.com/first-90-days',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: 'https://canadasurvivalguide.com/work-and-money',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...articleUrls,
  ]
}
