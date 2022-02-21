// & and
type ContainName = { name: string };
type ContainSurname = { surname: string };
type ContainAge = { age: number };
type Peoples = ContainName & ContainSurname & ContainAge;

/* type AB = 'A' | 'B';
type AC = 'A' | 'C';

type Intersection = AB & AC; */

const people: Peoples = {
  name: 'Ruan',
  surname: 'Signori',
  age: 18,
};

export { people };
