//Filter não edita o array original
//Filter vai retornar um array, com a msm quantidade de elementos ou menos.

//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


const numerosFiltrados = numeros.filter( valor => valor > 10 );
console.log(numerosFiltrados)
