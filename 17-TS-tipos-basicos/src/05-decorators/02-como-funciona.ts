// ele é chamado na hora da criação da classe
@invertValue
export class Animal {
  constructor(
    public name: string,
    public color: string
  ) {
    console.log('Sou a classe')
  }
}

// Fazendo a tipagem estendendo do construtor
function invertValue<T extends new (...args: any[]) => any>(target: T) {
  console.log('Sou o decarator e recebi', target)
  return class extends target {
    name: string;
    color: string;

    constructor(...args: any[]) {
      super(...args);
      this.color = this.invert(args[0]);
      this.name = this.invert(args[1]);
    }

    invert(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

const animal = new Animal('Zebra', 'branco');
console.log(animal)
