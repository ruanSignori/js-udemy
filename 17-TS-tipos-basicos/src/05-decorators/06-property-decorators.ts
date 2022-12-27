function decorator( classPrototype: any, name: string | symbol): any {
  let valueProperty: any;
  console.log(classPrototype)
  console.log(name)
  return {
    get: () => valueProperty,
    set: (value: any) => {
      valueProperty = value.split('').reverse().join()
    }
  }
}

export class Person {
  @decorator
  name: string;
  surname: string;
  age: number;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }


  metod(msg: string): string {
    return `${this.name} ${this.surname}: ${msg}`
  }

  get fullName(): string {
    return `${this.name} ${this.surname}`
  }

  set fullName(value: string) {
    const word = value.split(/\s+/g);
    const firstName = word.shift();

    if (!firstName) return;
    this.name = firstName;
    this.surname = word.join(' ')
  }
}

const person = new Person('Ruan', 'Signori', 19);
const method = person.metod('Olá, mundo!');
