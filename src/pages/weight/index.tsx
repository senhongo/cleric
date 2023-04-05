import type { WeightRecord } from '@/features/weight/model';

import Head from 'next/head';
import { useEffect, useState } from 'react';

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
      <Head>
        <title>Cleric</title>
        <meta name="description" content="Health manager" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

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
