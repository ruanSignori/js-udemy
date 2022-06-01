type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
};

const sumAllNumbers: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) {
    return args.reduce((prev, current) => prev + current, 0) + x + (y || 0);
  }

  return x + (y || 0);
};

console.log(sumAllNumbers(2));
console.log(sumAllNumbers(2, 2));
console.log(sumAllNumbers(1, 2, 3));
