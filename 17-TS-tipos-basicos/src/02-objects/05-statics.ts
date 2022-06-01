export class People {
  static ageDefault = 0;
  static cpfDefault = '000.000.000-00';

  constructor(
    public name: string,
    public surname: string,
    public age: number,
    public cpf: string,
  ) {}

  static sayHello(): void {
    console.log('Hello world');
  }

  static createNewPople(name: string, surname: string): People {
    return new People(name, surname, this.ageDefault, People.cpfDefault);
  }

  methodNormal(): void {
    console.log(People.ageDefault, People.cpfDefault);
  }
}

const people = new People('Ruan', 'Signori', 18, '102.330.321-23');
const people2 = People.createNewPople('Ruanzinho123', 'signori1312');
console.log(people);
console.log(people2);
people.methodNormal();
