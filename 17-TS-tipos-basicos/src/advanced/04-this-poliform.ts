export class Calculator {
  constructor(public number: number) {}

  add(n: number): this {
    this.number += n;
    return this;
  }

  sub(n: number): this {
    this.number -= n;
    return this;
  }

  div(n: number): this {
    this.number /= n;
    return this;
  }

  mul(n: number): this {
    this.number *= n;
    return this;
  }
}

export class SubCalculator extends Calculator {
  pow(n: number): this {
    this.number *= n;
    return this;
  }
}

const calc = new SubCalculator(10);
calc.add(5).mul(2).pow(3);
console.log(calc);

// Builder - Padrão de projeto GOF
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setURL(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Sending data through ${this.method} to ${this.url}`);
  }
}

const req = new RequestBuilder();
req.setMethod('get').setURL('http:localhost:3333').send();
