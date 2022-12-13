//Constructor funcion
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this) //Congela o objeto, não pode mudar de valor 
}

const p1 = new Pessoa('Luiz', 'Miranda');
p1.nome = 'Quero mudar o nome'
console.log(p1)