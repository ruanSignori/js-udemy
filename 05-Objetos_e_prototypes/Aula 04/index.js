/*
    Object.values
    Object.entries
    Object.assign(des, any)
    Object.getOwnPropertyDescriptor( o , 'prop')
    ...(spread) 
*/

/*
    Ja vimos
    Object.keys (retorna as chaves)
    Object.freeze (congela o objeto)
    Object.defineProperties (define várias propriedades)
    Object.defineProperty (define uma propriedade)
*/

const produto = {
    nome: 'Caneca',
    preco: 1.8
};

const outraCoisa = {
    ...produto, 
    material: 'porcelana'
}

outraCoisa.preco = 21
produto.nome = 'Feijão'

console.log(produto)
console.log(outraCoisa)