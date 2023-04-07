import type { ExerciseRecord } from '@/features/exercise/model';

import { useEffect, useState } from 'react';

import { PageHeader } from '@/components/PageHeader';
import { getData } from '@/features/exercise/model';

export default function Exercise() {
  const [exercises, setExercises] = useState<ExerciseRecord[]>([]);

  useEffect(() => {
    let ignore = false;

    async function readData() {
      const data = await getData();

      if (!ignore) {
        setExercises(data.sort((a, b) => a.date - b.date));
      }
    }

    readData();

    return () => {
      ignore = true;
    };
  }, []);
  return (
    <>
      <PageHeader title="Cleric / Exercises" />

      <main>
        <h1>Exercise</h1>
        <table>
          <tbody>
            {exercises.map((e) => (
              <tr key={e.date}>
                <td>{new Date(e.date).toLocaleDateString()}</td>
                <td>{e.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
