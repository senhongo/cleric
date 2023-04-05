import Head from 'next/head';

import { addData } from '@/features/weight/model';

export default function Record() {
  const now = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: React.SyntheticEvent) => {
    // stop page reload
    e.preventDefault();

    const target = e.target as typeof e.target & {
      date: { value: string };
      weight: { value: string };
      bodyFatRatio: { value: string };
    };

    addData({
      date: new Date(target.date.value).getTime(),
      weight: parseFloat(target.weight.value),
      bodyFatRatio: parseFloat(target.bodyFatRatio.value),
    });
  };
  return (
    <>
      <Head>
        <title>Cleric - Record weight</title>
        <meta name="description" content="Health manager" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label>
              Date: <input type="date" name="date" defaultValue={now} />
            </label>
          </div>
          <div>
            <label>
              Weight: <input type="number" name="weight" step=".1" />
            </label>
          </div>
          <div>
            <label>
              Body fat ratio:{' '}
              <input type="number" name="bodyFatRatio" step=".1" />
            </label>
          </div>
          <button>Record</button>
        </form>
      </main>
    </>
  );
}
