import Link from 'next/link';

import { PageHeader } from '@/components/PageHeader';
import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <PageHeader />

      <main className={styles.main}>
        <h1>Cleric</h1>
        <ul>
          <li>
            <Link href="weight/record">
              <span>Add weight</span>
            </Link>
          </li>
          <li>
            <Link href="weight">
              <span>View weights</span>
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
