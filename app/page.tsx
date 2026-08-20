import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import EmailCapture from '@/components/EmailCapture'
import HeroCTA from '@/components/HeroCTA'
import { getArticlesByCategory } from '@/lib/mdx'
import styles from './page.module.css'

const AFFILIATES = [
  { emoji: '💳', name: 'Wise', type: 'Send money home', desc: 'The cheapest way to send pesos back. No hidden fees.', earn: 'Up to $50 USD bonus for new users', href: 'https://wise.prf.hn/click/camref:1011l5JNf8' },
  { emoji: '🗣', name: 'iTalki', type: 'English tutors', desc: '1-on-1 lessons with native teachers from $8/hr.', earn: '$10 credit on your first lesson', href: 'https://www.italki.com/affshare?ref=af32362213' },
  { emoji: '🛡', name: 'SafetyWing', type: 'Travel insurance', desc: 'Health coverage while your provincial plan kicks in.', earn: 'Plans from $45 USD/month', href: 'https://safetywing.com/nomad-insurance/?referenceID=26537165&utm_source=26537165&utm_medium=Ambassador' },
  { emoji: '🗣', name: 'Cambly', type: 'English with natives', desc: 'Practice English with native Canadian and American tutors. On demand, any time.', earn: 'First lesson free', href: '#' },
]

export default async function Home() {
  const beforeYouGo = getArticlesByCategory('before-you-go')
  const first90Days = getArticlesByCategory('first-90-days')
  const workAndMoney = getArticlesByCategory('work-and-money')
  const totalArticles = beforeYouGo.length + first90Days.length + workAndMoney.length

  const CATEGORIES = [
    {
      stage: '01',
      slug: 'before-you-go',
      name: 'Before you go',
      desc: 'Documents, banking setup, and everything you need to do before you board the plane.',
      articles: beforeYouGo.slice(0, 3).map(a => a.title),
    },
    {
      stage: '02',
      slug: 'first-90-days',
      name: 'First 90 days',
      desc: 'SIN number, apartment hunting, cell plan, and surviving your first winter.',
      articles: first90Days.slice(0, 3).map(a => a.title),
    },
    {
      stage: '03',
      slug: 'work-and-money',
      name: 'Work & money',
      desc: 'How Canadian taxes work, workplace culture, and building financial stability.',
      articles: workAndMoney.slice(0, 3).map(a => a.title),
    },
  ]

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.heroTag}>For Latin Americans moving to Canada</p>
          <h1 className={styles.heroH1}>
            Everything they<br />
            don&apos;t tell you<br />
            <em>before you go</em>
          </h1>
          <p className={styles.heroSub}>
            The honest, practical guide written from a LATAM perspective.
            No legal jargon, no generic advice — just what actually works when you land.
          </p>
          <div className={styles.heroCtas}>
            <HeroCTA className={styles.ctaMain} />
            <Link href="/before-you-go" className={styles.ctaGhost}>Start reading →</Link>
          </div>
          <div className={styles.heroProof}>
            {[
              { num: String(totalArticles), lbl: 'Articles' },
              { num: '3', lbl: 'Stages' },
              { num: 'LATAM', lbl: 'Perspective' },
              { num: 'Free', lbl: 'Always' },
            ].map(p => (
              <div key={p.lbl} className={styles.proofItem}>
                <span className={styles.proofNum}>{p.num}</span>
                <span className={styles.proofLbl}>{p.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KIT */}
      <section className={styles.kitSection}>
        <div className={styles.kitInner}>
          <div>
            <p className={styles.kitLabel}>Inside the free kit</p>
            <h2 className={styles.kitTitle}>Your first 90 days,<br />mapped out</h2>
            <div className={styles.kitItems}>
              {[
                { n: '01', title: 'Pre-departure checklist', desc: 'Documents, bank accounts & what to close before leaving' },
                { n: '02', title: 'First 7 days survival plan', desc: 'SIN, phone, transit card — in the right order' },
                { n: '03', title: 'Cultural work guide', desc: 'Mistakes that cost Latin Americans jobs' },
                { n: '04', title: 'Winter survival kit', desc: 'What you actually need vs. what they tell tourists' },
              ].map(item => (
                <div key={item.n} className={styles.kitItem}>
                  <span className={styles.kitNum}>{item.n}</span>
                  <div className={styles.kitText}>
                    <strong>{item.title}</strong>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.kitCapture}>
            <p className={styles.kitCaptureLabel}>Free download</p>
            <h3 className={styles.kitCaptureTitle}>Canada First 30 Days Playbook</h3>
            <p className={styles.kitCaptureDesc}>Enter your email and we&apos;ll open the PDF immediately — no waiting.</p>
            <EmailCapture />
          </div>
        </div>
      </section>

      {/* RIBBON */}
      <div className={styles.ribbon}>
        {['Before you go', 'First 90 days', 'Work & money', 'Free resources', 'Talk to an advisor'].map((item, i) => (
          <span key={item} className={styles.ribbonItem}>
            {i > 0 && <span className={styles.ribbonDot} />}
            {item}
          </span>
        ))}
      </div>

      {/* GUIDES */}
      <section className={styles.guides}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Browse by topic</p>
              <h2 className={styles.sectionH2}>Three stages,<br /><em>one journey</em></h2>
            </div>
            <Link href="/before-you-go" className={styles.seeAll}>See all articles</Link>
          </div>
          <div className={styles.guideGrid}>
            {CATEGORIES.map(cat => (
              <Link key={cat.slug} href={`/${cat.slug}`} className={styles.guideCard}>
                <div className={styles.guideStage}>Stage {cat.stage}</div>
                <h3 className={styles.guideName}>{cat.name}</h3>
                <p className={styles.guideDesc}>{cat.desc}</p>
                <div className={styles.guideArticles}>
                  {cat.articles.map(a => (
                    <div key={a} className={styles.guideArticle}>{a}</div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RESUMIKA BANNER */}
      <section className={styles.resumika}>
        <div className={styles.inner}>
          <div className={styles.resumikaInner}>
            <div className={styles.resumikaLeft}>
              <div className={styles.resumikaLogo}>
                <Image src="/resumika-logo.svg" alt="Resumika" width={110} height={37} />
              </div>
              <p className={styles.resumikaTag}>From the same team</p>
              <h2 className={styles.resumikaTitle}>Your guide is ready.<br />Now build the CV that gets you hired.</h2>
              <p className={styles.resumikaDesc}>
                Resumika creates Canadian-format CVs designed to pass ATS filters and match what employers in Canada actually expect — no photo, no fluff, just results.
              </p>
            </div>
            <div className={styles.resumikaCta}>
              <a
                href="https://resumika.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resumikaBtn}
              >
                Build your Canadian CV →
              </a>
              <p className={styles.resumikaNote}>Free to start · No account required</p>
            </div>
          </div>
        </div>
      </section>

      {/* AFFILIATES */}
      <section className={styles.affs}>
        <div className={styles.inner}>
          <div className={styles.affHeader}>
            <p className={styles.affEyebrow}>Tools we actually use</p>
            <h2 className={styles.affH2}>Trusted by the LATAM community</h2>
          </div>
          <div className={styles.affGrid}>
            {AFFILIATES.map(a => (
              <a key={a.name} href={a.href} target="_blank" rel="noopener noreferrer" className={styles.affCard}>
                <div className={styles.affTop}>
                  <div className={styles.affLogo}>{a.emoji}</div>
                  <div>
                    <div className={styles.affName}>{a.name}</div>
                    <div className={styles.affType}>{a.type}</div>
                  </div>
                </div>
                <p className={styles.affDesc}>{a.desc}</p>
                <p className={styles.affEarn}>↗ {a.earn}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
