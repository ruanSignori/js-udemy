const pessoa1 = new Object();
pessoa1.nome = 'Fernando';
pessoa1.idade = 19;

//Para remover uma chave de um objeto e o seu valor, utilize:
//delete pessoa1.nome;

console.log(pessoa1.nome, pessoa1.idade);
console.log(typeof pessoa1);


const pessoa2 = {
    nome: 'Luiz',
    idade: 13
};

console.log(pessoa1, pessoa2)