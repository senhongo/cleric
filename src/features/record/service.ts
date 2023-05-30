import type { Record } from './types';
import {
  arrayUnion,
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

async function addRecord(record: Record) {
  try {
    return await setDoc(
      doc(db, dbName, record.id),
      {
        id: record.id,
        health: record.health,
        diet: arrayUnion(...record.diet),
        activities: arrayUnion(...record.activities),
        createdAt: Timestamp.fromDate(record.createdAt),
      },
      { merge: true },
    );
  } catch (e) {
    console.log('error adding record', e);
  }
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

export const Records = {
  addRecord,
  getRecordsInPeriod,
};
