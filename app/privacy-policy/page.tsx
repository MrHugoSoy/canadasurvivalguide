import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Canada Survival Guide — how we collect, use, and protect your information.',
  alternates: { canonical: 'https://canadasurvivalguide.com/privacy-policy' },
  robots: { index: true, follow: true },
}

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.inner}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>Legal</p>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.meta}>Effective date: June 20, 2026 · Canada Survival Guide</p>
          </div>

          <div className={styles.body}>

            <p>Canada Survival Guide (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website canadasurvivalguide.com. This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information.</p>

            <p>By using this site you agree to the practices described in this policy. If you do not agree, please do not use the site.</p>

            <hr />

            <h2>1. Information We Collect</h2>

            <h3>Email address</h3>
            <p>When you request the free guide or sign up through any form on this site, we collect your email address. This is the only personal information we collect directly.</p>

            <h3>Usage data</h3>
            <p>We may collect non-personal information about how you interact with our site, including pages visited, time spent, browser type, and referring URL. This data is anonymous and used only to improve the site.</p>

            <h3>Cookies</h3>
            <p>We use essential cookies to make the site function. If we add analytics or advertising tools in the future, we will update this policy and provide an opt-out mechanism. You can disable cookies in your browser settings at any time, though some features of the site may not work properly.</p>

            <hr />

            <h2>2. How We Use Your Information</h2>

            <p>We use your email address to:</p>
            <ul>
              <li>Deliver the free guide you requested</li>
              <li>Send occasional emails with new articles, resources, and updates relevant to moving to Canada</li>
              <li>Respond to any questions or requests you send us</li>
            </ul>

            <p>We do <strong>not</strong>:</p>
            <ul>
              <li>Sell your email address to third parties</li>
              <li>Share your personal information with advertisers</li>
              <li>Use your data for automated profiling or decision-making</li>
            </ul>

            <hr />

            <h2>3. Affiliate Disclosure</h2>

            <p>Canada Survival Guide participates in affiliate programs. This means that some links on this site — including links to Wise, iTalki, SafetyWing, and Cambly — are affiliate links. If you click one of these links and make a purchase or sign up, we may earn a commission at no extra cost to you.</p>

            <p>We only recommend products and services we genuinely believe are useful to people moving to Canada. Affiliate relationships do not influence our editorial content or rankings.</p>

            <p>The following third-party services have affiliate relationships with this site:</p>
            <ul>
              <li><strong>Wise</strong> — international money transfers (wise.com)</li>
              <li><strong>iTalki</strong> — online language tutoring (italki.com)</li>
              <li><strong>SafetyWing</strong> — travel and health insurance (safetywing.com)</li>
              <li><strong>Cambly</strong> — English conversation practice (cambly.com)</li>
            </ul>

            <hr />

            <h2>4. Data Storage and Security</h2>

            <p>Email addresses collected through our forms are stored using <strong>Supabase</strong>, a secure cloud database provider. Supabase stores data on encrypted servers and complies with industry-standard security practices. You can review Supabase&apos;s privacy policy at supabase.com/privacy.</p>

            <p>We take reasonable technical measures to protect your data. However, no method of internet transmission is 100% secure, and we cannot guarantee absolute security.</p>

            <p>We do not store payment information. All purchases made through affiliate links are processed directly by the third-party providers.</p>

            <hr />

            <h2>5. Third-Party Services</h2>

            <p>This site may use or link to third-party services with their own privacy policies. We are not responsible for the privacy practices of external sites. We encourage you to review the privacy policy of any third-party service you use.</p>

            <p>Third-party services that may be active on this site:</p>
            <ul>
              <li><strong>Vercel</strong> — website hosting (vercel.com/legal/privacy-policy)</li>
              <li><strong>Supabase</strong> — database (supabase.com/privacy)</li>
            </ul>

            <hr />

            <h2>6. Your Rights</h2>

            <p>Depending on your location, you may have the following rights regarding your personal data:</p>

            <h3>For all users</h3>
            <ul>
              <li><strong>Unsubscribe:</strong> Every email we send includes an unsubscribe link. You can opt out at any time.</li>
              <li><strong>Access:</strong> You can request a copy of the personal data we hold about you.</li>
              <li><strong>Deletion:</strong> You can request that we delete your email address and any associated data.</li>
              <li><strong>Correction:</strong> You can request that we correct inaccurate information.</li>
            </ul>

            <h3>GDPR (European users)</h3>
            <p>If you are located in the European Economic Area, you have additional rights under the General Data Protection Regulation, including the right to data portability and the right to lodge a complaint with a supervisory authority. Our lawful basis for processing your email is your explicit consent given when submitting the form.</p>

            <h3>CASL (Canadian users)</h3>
            <p>We comply with Canada&apos;s Anti-Spam Legislation (CASL). We only send commercial electronic messages to people who have given explicit consent. Every email includes a clear unsubscribe mechanism that is honored within 10 business days.</p>

            <p>To exercise any of the rights above, contact us at <strong>hello@canadasurvivalguide.com</strong>.</p>

            <hr />

            <h2>7. Data Retention</h2>

            <p>We retain your email address for as long as you remain subscribed. If you unsubscribe or request deletion, we will remove your email from our active list within 10 business days. Anonymized usage data may be retained indefinitely as it cannot be linked to any individual.</p>

            <hr />

            <h2>8. Children&apos;s Privacy</h2>

            <p>This site is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has submitted personal information to us, please contact us and we will delete it immediately.</p>

            <hr />

            <h2>9. Changes to This Policy</h2>

            <p>We may update this Privacy Policy from time to time. When we do, we will update the effective date at the top of this page. We encourage you to review this policy periodically. Continued use of the site after changes are posted constitutes your acceptance of the updated policy.</p>

            <hr />

            <h2>10. Contact</h2>

            <p>If you have any questions about this Privacy Policy or how we handle your data, please contact us:</p>
            <p>
              <strong>Canada Survival Guide</strong><br />
              Email: <a href="mailto:hello@canadasurvivalguide.com">hello@canadasurvivalguide.com</a>
            </p>

            <p style={{ marginTop: '48px', fontSize: '13px', color: 'var(--ink-4)' }}>
              This policy was last updated on June 20, 2026.
            </p>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
