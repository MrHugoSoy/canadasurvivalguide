'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from './Footer.module.css'
import DownloadModal from './DownloadModal'

export default function Footer() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <DownloadModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <footer className={styles.footer}>
        <div className={styles.logo}>
          Canada <em>Survival</em> Guide
        </div>
        <div className={styles.links}>
          <Link href="/before-you-go">Before you go</Link>
          <Link href="/first-90-days">First 90 days</Link>
          <Link href="/work-and-money">Work & money</Link>
          <button className={styles.linkBtn} onClick={() => setShowModal(true)}>Free guide</button>
        </div>
        <div className={styles.note}>
          For Latin Americans navigating the great white north
        </div>
      </footer>
    </>
  )
}
