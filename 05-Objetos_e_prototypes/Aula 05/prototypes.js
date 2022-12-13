// Construtora -> molde (classe)

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function (nome, sobrenome) {
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('luiz', 'Otavio');
const data = new Date()

console.dir(pessoa1);
console.dir(data)