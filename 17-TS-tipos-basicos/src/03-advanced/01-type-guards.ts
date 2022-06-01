export function add(a: unknown, b: unknown): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(add(1, 43));
console.log(add('asf', 'gyuasf'));

type People = { type: 'people'; name: string };
type Animal = { type: 'animal'; color: string };
type PeopleOrAnimal = People | Animal;

export class StudentUnknow implements People {
  type: 'people' = 'people';
  constructor(public name: string) {}
}

function showName(obj: PeopleOrAnimal): void {
  if (obj instanceof StudentUnknow) console.log(obj.name);
}

showName(new StudentUnknow('Andre'));
