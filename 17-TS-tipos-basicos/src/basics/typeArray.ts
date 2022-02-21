// Array<Tipo> || Tipo[]

function multiplyArgs(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1);
}

function concatStrings(...args: string[]): string {
  return args.reduce((acc, value) => acc + value, '');
}

function toUpperCase(...args: string[]): string[] {
  return args.map((currentString) => currentString.toLocaleUpperCase());
}

const resultMultiply: number = multiplyArgs(10, 23, 15, 3);
const resultConcat: string = concatStrings('a', 'b', 'c', 'd', 'e');
const stringsUpperCase: string[] = toUpperCase(
  'ruan signori',
  'com apresentação de',
  'gaúcho da fronteira',
);

console.log(resultMultiply);
console.log(stringsUpperCase);
console.log(resultConcat);
