/*
    Operadores incremento
    Incremento = ++
    Decremento = --

    Pós incremento: let contador = 1
                    contador++
                    console.log(contador)

    Pré incremento: let contador = 1
                    console.log(++contador)

    Operador de atribuição

*/
const passo = 50;
let contador = 0;
contador += passo; // contador = contador + 50
console.log(contador)

const num1 = 10;
const num2 = parseInt('5'); //Converter string para numero inteiro
console.log(num1 + num2)

const numA = 5;
const numB = parseFloat('10.32'); //Converter string para numero real
console.log(numA + numB)

const numero1 = 5
const numero2 = Number('10') //Vai converter string para qualquer tipo de numero (Inteiro, real, negativo, etc...)
console.log(numero1 + numero2)