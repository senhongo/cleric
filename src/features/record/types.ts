/**
 * Record when retrieved from FB.
 */
export interface Record {
  id: string; // date of event converted to timestamp
  createdAt: number; // Firebase Timestamp
  health: { weight: number; bodyFatRatio: number };
  diet: string[]; // 'salad' | 'other' | 'ate out'
  activities: Activity[];
}

interface CardioActivity {
  type: 'cardio';
  duration: number;
  distance: number;
}

interface CalisthenicsActivity {
  type: 'calisthenics';
  exercise: string; // horizontalPull, verticalPush, squat etc
  reps: number;
}

type Activity = CardioActivity | CalisthenicsActivity;

// Activity example
// const acitivties: Activity[] = [
//   {
//     type: 'cardio',
//     distance: 5,
//     duration: 55,
//   },
//   {
//     type: 'calisthenics',
//     exercise: 'horizontalPush',
//     reps: 50,
//   },
//   {
//     type: 'calisthenics',
//     exercise: 'verticalPull',
//     reps: 50,
//   },
// ];
