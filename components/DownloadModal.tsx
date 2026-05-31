'use client'
import { useState } from 'react'
import styles from './DownloadModal.module.css'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export default function DownloadModal({ isOpen, onClose }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  if (!isOpen) return null

  async function handleSubmit() {
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        window.open('/downloads/canada-first-30-days-playbook.pdf')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <button className={styles.close} onClick={onClose} aria-label="Close">✕</button>
          <h2 className={styles.title}>Get your free guide</h2>
          <p className={styles.subtitle}>Enter your email and we'll send it right away</p>
        </div>
        <div className={styles.body}>
          {status === 'success' ? (
            <p className={styles.success}>✓ Your download is starting…</p>
          ) : (
            <>
              <input
                className={styles.input}
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                autoFocus
              />
              <button
                className={styles.btn}
                onClick={handleSubmit}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Just a moment…' : 'Download now'}
              </button>
              {status === 'error' && (
                <p className={styles.error}>Something went wrong. Try again.</p>
              )}
              <p className={styles.fine}>No spam. Unsubscribe anytime.</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
