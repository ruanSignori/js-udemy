//Função construtora
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostrar a chave? Sim: true, Não: false
        configurable: false, //Pode apagar, reconfigurar a chave? Sim: true, Não: false
        get: function() {
            return estoquePrivado
        },
        set: function (valor) {
            if( typeof valor !== 'number'){
                throw new TypeError('Insirá um estoque valido')
            }

            estoquePrivado = valor;
        }
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },

        set nome(valor) {
            valor = valor.replace('Coisa', '')
            nome = valor
        }
    };
};

const prod = criaProduto('Camiseta')
prod.nome = 'qualquer Coisa';
console.log(prod.nome)

//const p1 = new Produto('Camiseta', 20, 06);
//console.log(p1);