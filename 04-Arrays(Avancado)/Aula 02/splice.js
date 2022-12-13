//Splice manipula o array original que nem push e pop
const nomes = ['Maria', 'Joao', 'Pedro', 'Eduardo', 'Jose' ];

let removidos = nomes.splice(1, 1, 'Ruan', 'fELIPE')

//unshift 
nomes.splice(0, 0, 'Felipao')

console.log(nomes)
console.log(removidos)