const num = [1, 2 , 3];
const num2 = [4, 5, 6];

//Ambos conseguem concatenar arrays
const num3 = num.concat(num2);
const total = [...num, 'felipao', ...num2, ...[7, 8, 9]];

console.log(num3);
console.log(total);