'use client'
import { useState } from 'react'
import styles from './EmailCapture.module.css'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit() {
    if (!email || status === 'loading') return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        window.open('/downloads/canada-first-30-days-playbook.pdf', '_blank')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return <p className={styles.success}>✓ Check your downloads — the guide is on its way.</p>
  }

  return (
    <div className={styles.right}>
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
      {status === 'error' && <p className={styles.errorMsg}>Something went wrong. Try again.</p>}
    </div>
  )
}
