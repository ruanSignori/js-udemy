export function funcao(this: Date, arg: string, age: number): void {
  console.log(this);
  console.log(arg + age);
}

funcao.call(new Date(), 'Ruan', 14);
funcao.apply(new Date(), ['ruan', 13]);
