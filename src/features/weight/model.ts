import { collection, query, getDocs, setDoc, doc } from 'firebase/firestore';

import { db } from '@/libs/firebase';

const dbName = 'weight';

export type WeightRecord = {
  weight: number;
  bodyFatRatio: number;
  date: number;
};

export async function addData(data: WeightRecord) {
  await setDoc(doc(db, dbName, String(data.date)), data);
}

export async function getData() {
  const data: WeightRecord[] = [];
  const q = query(collection(db, dbName));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data.push(doc.data() as WeightRecord);
  });

  return data;
}
