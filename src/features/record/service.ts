import type { Record } from './types';
import { collection, query, getDocs, setDoc, doc } from 'firebase/firestore';

import { db } from '@/libs/firebase';

const dbName = 'records';

export async function addData(data: Record) {
  await setDoc(doc(db, dbName, String(data.createdAt)), data, { merge: true });
}

