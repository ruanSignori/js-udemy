const nomes = ['Eduardo', 'Lucao', 'Felipao'];
const novo = [...nomes];
nomes.unshift('Joana')
nomes.push('Andre')
const removido = novo.shift();
console.log(nomes)
console.log(novo)
console.log(removido)