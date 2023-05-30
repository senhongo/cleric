import type { Record } from '@/features/record/types';

import { Records } from '@/features/record/service';

const FakeRecord: Record = {
  id: new Date().toISOString().substring(0, 10),
  createdAt: new Date(),
  health: { weight: 12.3, bodyFatRatio: 12.3 },
  diet: ['salad'],
  activities: [],
};
import styles from '@/styles/Home.module.scss';
/**
 * A page for testing stuff
 * @returns
 */
export default function Tester() {
  async function handleAdd() {
    const result = await Records.addRecord(FakeRecord);
    console.log('add record', result);
  }

  async function handleRetrieve() {
    const from = new Date(2023, 3, 1);
    const to = new Date(2023, 6, 1);
    const result = await Records.getRecordsInPeriod(from, to);
    console.log('retrieve', result);
  }
  return (
    <main className={styles.main}>
      <h1>Test page</h1>
      <div>
        <button type="button" onClick={handleAdd}>
          Add record
        </button>
      </div>
      <div>
        <button type="button" onClick={handleRetrieve}>
          Retrieve records
        </button>
      </div>
    </main>
  );
}
