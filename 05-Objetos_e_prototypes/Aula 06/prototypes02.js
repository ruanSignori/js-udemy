function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function (percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camisa', 50);
const p2 = {
    nome: 'Cancea',
    preco : 40
};

Object.setPrototypeOf(p2, Produto.prototype)
p1.aumento(100)
console.log(p1)

p2.aumento(30)
console.log(p2)

const p3 = Object.create(Produto.prototype);
p3.preco = 113
p3.aumento(10)
console.log(p3)

const p4 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 40
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 4
    }
});

p4.aumento(100);
console.log(p4)