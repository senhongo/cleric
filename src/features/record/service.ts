import type { Record } from './types';
import {
  collection,
  query,
  getDocs,
  setDoc,
  doc,
  Timestamp,
  where,
} from 'firebase/firestore';

import { db } from '@/libs/firebase';

const dbName = 'records';

export async function addRecord(record: Record) {
  // TODO: move this to mapper, or elsehwere
  // id should be a string like '2023-05-01'
  const id = record.createdAt.toISOString().substring(0, 10);
  await setDoc(
    doc(db, dbName, record.id),
    {
      ...record,
      createdAt: Timestamp.fromDate(record.createdAt),
    },
    { merge: true },
  );
}

/**
 * Get a series of records within a period of time
 * @param from Date
 * @param to Date
 * @returns Record[]
 */
// TODO: needs testing to verify the where works
async function getRecordsInPeriod(from: Date, to: Date) {
  const records: Record[] = [];
  const q = query(
    collection(db, dbName),
    where('createdAt', '>=', Timestamp.fromDate(from)),
    where('createdAt', '<=', Timestamp.fromDate(to)),
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    records.push(doc.data() as Record);
  });

  return records;
}
