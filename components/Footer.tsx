import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        Canada <em>Survival</em> Guide
      </div>
      <div className={styles.links}>
        <Link href="/before-you-go">Before you go</Link>
        <Link href="/first-90-days">First 90 days</Link>
        <Link href="/work-and-money">Work & money</Link>
        <Link href="/free-guide">Free guide</Link>
        <Link href="/talk-to-advisor">Talk to an advisor</Link>
      </div>
      <div className={styles.note}>
        For Latin Americans navigating the great white north
      </div>
    </footer>
  )
}
