import { PageHeader } from '@/components/PageHeader';
import { addData } from '@/features/exercise/model';
import { now } from '@/utilities/now';

export default function Record() {
  const handleSubmit = (e: React.SyntheticEvent) => {
    // stop page reload
    e.preventDefault();

    const target = e.target as typeof e.target & {
      date: { value: string };
      activity: { value: string };
    };

    addData({
      date: new Date(target.date.value).getTime(),
      activity: target.activity.value,
    });
  };
  return (
    <>
      <PageHeader title="Cleric / Record Exercise" />

      <main>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label>
              Date: <input type="date" name="date" defaultValue={now()} />
            </label>
          </div>
          <div>
            <label>
              Activity: <input type="text" name="activity" placeholder="jog" />
            </label>
          </div>
          <button>Record</button>
        </form>
      </main>
    </>
  );
}
