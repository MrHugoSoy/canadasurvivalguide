'use client'
import Link from 'next/link'
import { useState } from 'react'
import styles from './Navbar.module.css'
import DownloadModal from './DownloadModal'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <DownloadModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.logo}>
            Canada <em>Survival</em> Guide
          </Link>

          <div className={`${styles.links} ${open ? styles.open : ''}`}>
            <Link href="/before-you-go">Before you go</Link>
            <Link href="/first-90-days">First 90 days</Link>
            <Link href="/work-and-money">Work & money</Link>
          </div>

          <button onClick={() => setShowModal(true)} className={styles.pill}>
            Free guide
          </button>

          <button
            className={styles.burger}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
    </>
  )
}
