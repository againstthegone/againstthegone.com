import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Against The Gone</title>
        <meta name="description" content="Against The Gone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          AGAINST THE GONE
        </h1>

        <nav className={styles.nav}>
          <a href="#">Thoughts.</a>
          <a href="#">Impressions.</a>
          <a href="#">Code.</a>
        </nav>
      </main>

      <footer className={styles.footer}>
        © 2021 AGAINST THE GONE
      </footer>
    </div>
  )
}
