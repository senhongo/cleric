import type { WeightRecord } from '@/features/weight/model';

import { useEffect, useState } from 'react';

import { PageHeader } from '@/components/PageHeader';
import { getData } from '@/features/weight/model';

export default function Weight() {
  const [weights, setWeights] = useState<WeightRecord[]>([]);

  useEffect(() => {
    let ignore = false;

    async function readData() {
      const data = await getData();

      if (!ignore) {
        setWeights(data.sort((a, b) => a.date - b.date));
      }
    }

    readData();

    return () => {
      ignore = true;
    };
  }, []);
  return (
    <>
      <PageHeader title="Cleric / Weights" />

      <main>
        <h1>Weights</h1>
        <table>
          <tbody>
            {weights.map((w) => (
              <tr key={w.date}>
                <td>{new Date(w.date).toLocaleDateString()}</td>
                <td>
                  {w.weight} / {w.bodyFatRatio}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
