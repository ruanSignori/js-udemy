function decorator(
  classPrototype: any, 
  nameMethod: string, 
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  console.log(classPrototype, nameMethod, descriptor);
  return {
    writable: false,
    configurable: false,
    value: function(...args: any[]) {
      return args[0].toUpperCase();
    }
  }
}

export class Person {
  name: string;
  surname: string;
  age: number;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  @decorator
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


console.log(method)