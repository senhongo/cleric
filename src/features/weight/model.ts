import { setDoc, doc, Timestamp } from 'firebase/firestore';

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
  await setDoc(doc(db, 'weight', data.date), {
    weight: data.weight,
    bodyFatRatio: data.bodyFatRatio,
    date: Timestamp.fromDate(new Date(data.date)),
  });
}
