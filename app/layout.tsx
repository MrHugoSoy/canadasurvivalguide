import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Canada Survival Guide — For Latin Americans Moving to Canada',
    template: '%s | Canada Survival Guide',
  },
  description:
    'The honest, practical guide for Latin Americans moving to Canada. No legal jargon — just what actually works when you land.',
  metadataBase: new URL('https://canadasurvivalguide.com'),
  alternates: {
    canonical: 'https://canadasurvivalguide.com',
  },
  authors: [{ name: 'Canada Survival Guide', url: 'https://canadasurvivalguide.com' }],
  openGraph: {
    siteName: 'Canada Survival Guide',
    type: 'website',
    locale: 'en_US',
    url: 'https://canadasurvivalguide.com',
    title: 'Canada Survival Guide — For Latin Americans Moving to Canada',
    description:
      'The honest, practical guide for Latin Americans moving to Canada. No legal jargon — just what actually works when you land.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canada Survival Guide — For Latin Americans Moving to Canada',
    description:
      'The honest, practical guide for Latin Americans moving to Canada. No legal jargon — just what actually works when you land.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E0HG8VQ1S8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E0HG8VQ1S8');
          `}
        </Script>
      </body>
    </html>
  )
}
