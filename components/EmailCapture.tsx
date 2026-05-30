'use client'
import { useState } from 'react'
import styles from './EmailCapture.module.css'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

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
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.label}>Free guide</div>
          <h3 className={styles.title}>Get the LATAM Survival Kit</h3>
          <p className={styles.desc}>
            Checklist, first-week plan, and cultural guide — all in one PDF.
          </p>
        </div>
        <div className={styles.right}>
          {status === 'success' ? (
            <p className={styles.success}>✓ Check your inbox — it's on its way.</p>
          ) : (
            <>
              <input
                className={styles.input}
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              />
              <button
                className={styles.btn}
                onClick={handleSubmit}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending…' : 'Send me the guide'}
              </button>
              <p className={styles.fine}>No spam. Unsubscribe anytime.</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
