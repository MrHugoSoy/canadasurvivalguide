import { ImageResponse } from 'next/og'
import { getArticleRaw } from '@/lib/mdx'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const CATEGORY_LABELS: Record<string, string> = {
  'before-you-go': 'Before You Go',
  'first-90-days': 'First 90 Days',
  'work-and-money': 'Work & Money',
}

export default async function Image({
  params,
}: {
  params: { category: string; slug: string }
}) {
  const article = getArticleRaw(params.category, params.slug)
  const title = article?.meta.title ?? 'Canada Survival Guide'
  const description = article?.meta.description ?? ''
  const categoryLabel = CATEGORY_LABELS[params.category] ?? params.category

  return new ImageResponse(
    (
      <div
        style={{
          background: '#1d3d2a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            color: '#7aab8a',
            fontSize: 15,
            letterSpacing: 3,
            textTransform: 'uppercase',
            fontFamily: 'sans-serif',
          }}
        >
          Canada Survival Guide · {categoryLabel}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              color: '#ffffff',
              fontSize: 54,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 960,
            }}
          >
            {title}
          </div>
          {description && (
            <div
              style={{
                color: '#c2ddc9',
                fontSize: 22,
                lineHeight: 1.5,
                maxWidth: 860,
                fontFamily: 'sans-serif',
                fontWeight: 300,
              }}
            >
              {description}
            </div>
          )}
        </div>

        <div
          style={{
            color: '#7aab8a',
            fontSize: 15,
            fontFamily: 'sans-serif',
            opacity: 0.6,
          }}
        >
          canadasurvivalguide.com
        </div>
      </div>
    ),
    { ...size }
  )
}
