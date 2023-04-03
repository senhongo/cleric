import Head from 'next/head';
import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cleric</title>
        <meta name="description" content="Health manager" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.main}>
        <h1>Cleric</h1>
      </main>
    </>
  );
}
