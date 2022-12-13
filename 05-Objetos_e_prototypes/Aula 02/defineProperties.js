function Produto(nome, preco, estoque){


    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            configurable: false,
            writable: true,
        },
        preco: {
            enumerable: true,
            value: preco,
            configurable: false,
            writable: true,
        }
    });

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        configurable: false,
        writable: true,
    });
}


const p1 = new Produto('Camiseta', 50, 3)

console.log(p1)