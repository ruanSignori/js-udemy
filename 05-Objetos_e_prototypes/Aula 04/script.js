const produto = {
    nome: 'Caneca',
    preco: 1.8
};

const caneca = Object.assign({}, produto, {material: 'Porcelana'})
caneca.nome = 'Outro nome'
console.log(produto);
console.log(caneca)
//Object.assign = copia um objeto, spread operator também é capaz de copiar objetos

const mao = {
    aa: 'AAA',
    bb: 'BBBB'
}

const teste = Object.assign(mao);
teste.dia = '3'
console.log(mao)
console.log(teste)