export class People<T, U> {
  constructor (public nome: T, public idade: U) {}
}

// Exemplo aonde o tipo é inferido
const people1 = new People('Ruan', 30);
const people2 = new People(['ruan'], { idade: 30});

// Estrutura de dados stack
export class Stack<T> {
  private counter = 0;
  private elements: {[k: number]: T} = {};

  isEmpty(): boolean {
    return this.counter === 0;
  }

  length(): number {
    return this.counter;
  }

  show(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    };
  }

  push(element: T): void {
    this.elements[this.counter] = element;
    this.counter++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.counter--;
    const element = this.elements[this.counter];
    delete this.elements[this.counter];
    return element;
  }
}

const stack = new Stack<number>();
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(2);
const elemnt1 = stack.pop()

stack.show()

