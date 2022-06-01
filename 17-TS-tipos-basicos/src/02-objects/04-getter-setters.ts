export class People {
  constructor(
    private name: string,
    private surname: string,
    private age: number,
    private _cpf: string,
  ) {}

  get cpf(): string {
    return this._cpf;
  }

  set cpf(value: string) {
    this._cpf = value;
  }
}

const people = new People('Ruan', 'Signori', 18, '102.330.321-23');
people.cpf = '1wu8903u91sf';
console.log(people.cpf);
