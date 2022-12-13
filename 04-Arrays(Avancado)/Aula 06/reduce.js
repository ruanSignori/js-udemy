//reduce reduzie um array em um unico elemento

//Some todos os números (reduce)
//Retorne um array com os pares (filter)
//Retorne um array com o dobro dos valores (map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce ( function(acumulador, valor){
    if (valor % 2 === 0 ) acumulador.push(valor);
    return acumulador;
}, []); //o 0 é o valor incial para o acumulador 

console.log(total)
