
//Função construtora
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    //Define Property
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostrar a chave? Sim: true, Não: false
        value: estoque,  //valor associado com a propriedade
        writable: false, //O valor pode ser mudado? Sim: true, Não: false
        configurable: false //Pode apagar, reconfigurar a chave? Sim: true, Não: false
    });
}

const p1 = new Produto('Camiseta', 20, 03);

console.log(Object.keys(p1)) //Retorna as chaves do produto, como se fosse um array

for (let chave in p1 ) {
    console.log(chave)
}