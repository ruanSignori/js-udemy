//Padrao de conta do JavaScript
// IEEE 754-2008    

let num1 = 0.532
let num2 = 0.1
console.log(num1.toFixed(2))//Representa o numero em 2 casa decimais
console.log(Number.isInteger(num1))
 num1 += num2 //0.6
 num1 += num2 //0.7
 num1 += num2 //0.8
 num1 += num2 //0.9
 num1 += num2 //1.0
 num1 += num2 //1.1
 num1 += num2 //1.2
 num1 += num2 //1.3
 /* O resultado vai ser 1.3320000000000003
Para deixar 
*/
num1 = Number(num1.toFixed(2))

 console.log(num1)

