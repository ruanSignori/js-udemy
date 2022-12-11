// predicado
// quando uma função retorna um bolean quando o boollean for true, o value que vai ser retornado é do tipo number por exemplo
export function checkIsNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function plus<T>(...args: T[]): number | null {
  const initialValue = 0
  const value = args.reduce((sum, value) => {
    if (checkIsNumber(sum) && checkIsNumber(value)) {
      return sum + value;
    };

    return sum;
  }, initialValue);

  return value;
};

// A partir do momento que tu passa o primeiro valor
// O tipo vai ser inferido, e só poderá receber valores do mesmo tipo, por isso vai da erro de você passar um number e depois uma string
// console.log(plus(1, 54, 3, '1a'))

// Entretanto você passando um array do mesmo jeito abaixo, irá da certo
console.log(plus(...[1, 5, 7, 'a', 'b', 'c', '3']));



