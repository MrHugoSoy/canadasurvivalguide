import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Canada Survival Guide'

export default function Image() {
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
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            color: '#7aab8a',
            fontSize: 16,
            letterSpacing: 4,
            textTransform: 'uppercase',
            marginBottom: 32,
            fontFamily: 'sans-serif',
          }}
        >
          For Latin Americans Moving to Canada
        </div>
        <div
          style={{
            color: '#ffffff',
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          Canada Survival Guide
        </div>
        <div
          style={{
            color: '#c2ddc9',
            fontSize: 24,
            marginTop: 36,
            maxWidth: 720,
            lineHeight: 1.6,
            fontFamily: 'sans-serif',
            fontWeight: 300,
          }}
        >
          The honest, practical guide written from a LATAM perspective.
          No legal jargon — just what actually works when you land.
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            right: 80,
            color: '#7aab8a',
            fontSize: 16,
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
