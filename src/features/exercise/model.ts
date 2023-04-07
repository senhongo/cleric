import { collection, query, getDocs, setDoc, doc } from 'firebase/firestore';

import { db } from '@/libs/firebase';

const dbName = 'exercise';

export type ExerciseRecord = {
  activity: string;
  date: number;
};

export async function addData(data: ExerciseRecord) {
  await setDoc(doc(db, dbName, String(data.date)), data);
}

export async function getData() {
  const data: ExerciseRecord[] = [];
  const q = query(collection(db, dbName));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data.push(doc.data() as ExerciseRecord);
  });

  return data;
}
