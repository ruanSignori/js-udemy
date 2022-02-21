/* eslint-disable */
let nome: string = 'Ruan';
let idade: number = 0o774; // 10, 1.57, -5,55, 0xf00d, 0b1010, 0o774
let adulto: boolean = false;
let simbolo: symbol = Symbol('Qualquer-symbol');
/* let big: bigint = 10n; */

//Arrays
let arrayNumber: Array<number> = [1, 3, 5, 12];
let arrayNumberTwo: number[] = [1, 8, 21, 4];
let arrayStrings: Array<string> = ['R', 'u', 'a', 'n'];
let arrayStringsTWo: string[] = ['Ruan', 'Signori'];

//Objetos
let peoples: {name: string, age: number, adult?: boolean} = {
  name: 'Ruan Signori',
  age: 17,
  adult: false
};

//Funções
function sum(x: number, y:number): number {
  return x + y;
}

const sumTwo: (x: number, y:number) => number = (x, y) => x + y;

