let x = 10; // eslint-disable-line
x = 0b1111;

let a = 100 as const; //eslint-disable-line

console.log(a);
console.log(x);

export const peoples = {
  name: 'Ruan' as const,
  surname: 'Signori',
};

// as const, declarou que 'Ruan' é um subtipo de string (Tipo literal), a partir de agora o sua chave é imutável

function chooseColor(color: 'Red' | 'Yellow' | 'Blue'): string {
  return color;
}

console.log(chooseColor('Red'));
