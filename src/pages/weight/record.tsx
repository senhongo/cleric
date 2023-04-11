import { PageHeader } from '@/components/PageHeader';
import { addData } from '@/features/weight/model';
import { now } from '@/utilities/now';

export default function Record() {
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
      bodyFatRatio: parseFloat(target.bodyFatRatio.value || '0'),
    });
  };
  return (
    <>
      <PageHeader title="Cleric / Record Weight" />

      <main>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label>
              Date: <input type="date" name="date" defaultValue={now()} />
            </label>
          </div>
          <div>
            <label>
              Weight:{' '}
              <input type="number" name="weight" step=".1" placeholder="65.8" />
            </label>
          </div>
          <div>
            <label>
              Body fat ratio:{' '}
              <input
                type="number"
                name="bodyFatRatio"
                step=".1"
                placeholder="15.3"
              />
            </label>
          </div>
          <button>Record</button>
        </form>
      </main>
    </>
  );
}
