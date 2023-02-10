import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={`${styles.description}`}>
        <h1>AI Chat</h1>
      </div>
    </main>
  )
}
