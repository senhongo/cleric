export function now() {
  const date = new Date();
  const offset = date.getTimezoneOffset();
  const now = new Date(date.getTime() - offset * 60 * 1000);
  return now.toISOString().split('T')[0];
}
