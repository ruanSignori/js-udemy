const produto = {nome: 'Produto', preco: 1.8};
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    enumerable: false,

});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(produto)