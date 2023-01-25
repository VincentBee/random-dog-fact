import styles from './page.module.css'

export const revalidate = 60;

interface FactApiResponse {
  facts: string[];
  success: boolean;
}

async function getQuote() {
  const res = await fetch('https://dog-api.kinduff.com/api/facts');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const response: FactApiResponse = await res.json();

  return response.facts[0];
}

export default async function Home() {
  const quote = await getQuote();

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>🐶</h1>
        <p className={styles.quote}>
          {quote}
        </p>
      </div>
    </main>
  )
}
