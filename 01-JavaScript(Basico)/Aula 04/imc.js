const nome = 'Ruan';
const sobrenome = ' Signori';
const idade = 16;
const peso = 63;
const alturaEmM = 1.80;

let imc = peso / (alturaEmM * alturaEmM)
let anoNasc = 2021 - idade

console.log(`${nome + sobrenome} tem ${idade} anos, pesa ${peso}Kg `)
console.log(`Tem ${alturaEmM} de altura e seu IMC é de ${imc}`)
console.log(`${nome + sobrenome} nasceu em ${anoNasc} aproximadamente`)

