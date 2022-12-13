/*
    Valores pirmitivos(imutaveis(nao tem como mudar)) = String, Number, Boolean, Undefined, Null, (bigint, symbol)

    Referencia (mutavel = array, object, function)
*/

//Array
let a = [1,2,3]
let b = a;
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

console.log(c)

//Object
const a1 = {
    nome: 'Ruan',
    sobrenome: 'Signori'
};
const b1 = a1;
a1.nome = 'Joao';
console.log(b1);

//Para copiar deve fazer o seguinte, sem que as duas variaveis apontem para o mesmo local na memoria

const a2 = {
    nome: 'Ruan',
    sobrenome: 'Signori'
};
const b2 = {...a2}
a2.nome = 'Joao'
console.log(b2)
