//Produto -> aumento, desconto
// camiseta = cor e tamanho, calças = tamanho e tipo, canecas = material

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Calcas(nome, preco, tamanho){
    Produto.call(this, nome, preco);
    this.tamanho = tamanho;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
};

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty (this, 'estoque', {
        enumerable: true,
        configurable: false,
        get : function (){
            return estoque;
        },

        set: function (valor) {
            if (typeof valor !== "number") return;
            estoque = valor;
        }
    })
};

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;


Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const calcas = new Calcas('Jeans', 45, '42');
const caneca = new Caneca('Caneca Café', 12, 'Porcelana', 06);

camiseta.aumento(100);

console.log(camiseta);
console.log(calcas);
console.log(caneca);
console.log(caneca.estoque);