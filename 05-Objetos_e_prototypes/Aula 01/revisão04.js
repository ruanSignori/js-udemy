const pessoa1 = new Object();
pessoa1.nome = 'Andre';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 48
pessoa1.falarNome = function() {

    //Como a function está dentro da pessoa1, se eu utilizar this, o this está se referindo à pessoa1
    return (`${this.nome} está falando seu nome`)
};

//Saber em que ano a pessoa nasceu
pessoa1.getDataNasc = function(){
    const dataAtual = new Date();
    return dataAtual. getFullYear() - this.idade;
}


for (let chave in pessoa1){
    console.log(chave)
}

console.log(pessoa1.getDataNasc());