// Classe é a mesma coisa que função construtora em JavaScript


//Classe
class CriaPessoa {
    constructor (nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    falar(){
        console.log(`${this.nome} está falando Oi`)
    }

};

//Function construtora
function Pessoa2(nome, sobrenome){
    this.nome = nome;  
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando`)
}

const p1 = new CriaPessoa('Joao', 'Silva', 18);
console.log(p1)

const p2 = new Pessoa2('Andre', 'Rubens');
console.log(p2)