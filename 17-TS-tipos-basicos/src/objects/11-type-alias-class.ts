type TypePeople = {
  name: string;
  surname: string;
};

type FullName = {
  fullName(): string;
};

// É possível implementar mais de um tipo
export class People implements TypePeople, FullName {
  constructor(public name: string, public surname: string) {}

  fullName(): string {
    return `${this.name} ${this.surname}`;
  }
}

const people = new People('Ruan', 'Signori');
console.log(people.fullName());
