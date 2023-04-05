import { collection, query, getDocs, setDoc, doc } from 'firebase/firestore';

import { db } from '@/libs/firebase';

export type WeightRecord = {
  weight: number;
  bodyFatRatio: number;
  date: number;
};

export type FBWeightRecord = {
  weight: number;
  bodyFatRatio: number;
  date: number;
};

export async function addData(data: WeightRecord) {
  await setDoc(doc(db, 'weight', String(data.date)), data);
}

export async function getData() {
  const weights: WeightRecord[] = [];
  const q = query(collection(db, 'weight'));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    weights.push(doc.data() as WeightRecord);
  });

  return weights;
}
