interface Constructor {
  new (...args: any[]): any
}

function invertValue (param1: string, param2: string) {
  return function <T extends Constructor>(target: T) {
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
        return value.split('').reverse().join('') + param1;
      }
    };
  }
}

// Decorator com parametros
function otherDecorator(param1: string) {
  return function (target: Constructor) {
    console.log('Outro decorador', param1)
  }
}

@otherDecorator('Opaaa')
@invertValue('Valor1', 'Valor2')

export class Animal {
  constructor(
    public name: string,
    public color: string
  ) {
    console.log('Sou a classe')
  }
}

const animal = new Animal('Zebra', 'branco');
console.log(animal)
