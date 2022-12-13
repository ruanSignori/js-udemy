let num = 1
let num2 = 1.5

console.log(num.toString() + num2) /*A variável não vira uma string, a variável é apenas convertida de number para string temporariamente quando executada esse código*/
console.log(typeof num)

/*Para mudar definitivamente o valor de um number 
para string:
*/
num = num.toString()
console.log(typeof num)


//Representação binária 
let num3 = 1500
console.log(num3.toString(2))
 