export function CreatePeople(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}
