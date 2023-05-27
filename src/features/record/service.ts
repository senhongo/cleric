import type { Record } from './types';
import {
  collection,
  query,
  getDocs,
  setDoc,
  doc,
  Timestamp,
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

