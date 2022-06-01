export class People {
  constructor(
    public name: string,
    public surname: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return this.name + ' ' + this.surname;
  }
}

export class Student extends People {}
export class Client extends People {}

const people = new People('Ruan', 'Signori', 18, '102.330.321-23');
const student = new Student('Ruan', 'Signori', 18, '102.330.321-23');
const client = new Client('Ruan', 'Signori', 18, '102.330.321-23');

console.log(people.getFullName(), student, client);
//Super se referencia a "Super classe" que de onde as subclasses estão sendo extendida
//Nesse programa em especifico o "super" faz referencia a class People
