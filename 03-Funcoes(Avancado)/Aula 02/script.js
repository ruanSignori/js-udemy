
//Mini calculadora com rest operator(rest operator precisa ser o ultimo parametro)[
//Argumentos nao existe em arrow functions
// o rest operator funcion em qualquer tipo de função
const conta = function conta(operador, acumulador, ...numeros){
    console.log(arguments)
    for (let numero of numeros){
       if(operador === '+') acumulador += numero;
       if(operador === '-') acumulador -= numero;
       if(operador === '/') acumulador /= numero;
       if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador)
};

conta('*', 1 ,20 ,30, 40 ,50)