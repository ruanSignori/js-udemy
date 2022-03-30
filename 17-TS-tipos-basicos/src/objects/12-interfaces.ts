interface TypePeople {
  name: string;
  surname: string;
}

type FullName = {
  fullName(): string;
};

type PeopleExtends = TypePeople & FullName;
interface TipePeople2 extends TypePeople, FullName {}

// É possível implementar mais de um tipo
export class People implements PeopleExtends {
  constructor(public name: string, public surname: string) {}

  fullName(): string {
    return `${this.name} ${this.surname}`;
  }
}

const people = new People('Ruan', 'Signori');
console.log(people.fullName());
