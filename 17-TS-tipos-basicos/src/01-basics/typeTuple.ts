const dataClientOne: readonly [number, string] = [1, 'Ruan'];
const dataCleintTwo: [number, string, string?] = [100, 'Ruan', 'Signori'];
const dataCleintThree: [number, string, ...string[]] = [
  100,
  'Ruan',
  'Signori',
  'Spre',
];

console.log(dataClientOne);
console.log(dataCleintTwo);
console.log(dataCleintThree);
