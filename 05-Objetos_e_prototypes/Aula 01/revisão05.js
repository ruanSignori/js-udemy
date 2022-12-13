// Factory functions / Constructor functions / Classes

//Factory Functions
/*
    function criaPessoa(nome, sobrenome) {
        return {
            nome, 
            sobrenome,
            get nomeCompleto() {
                return `${this.nome} ${this.sobrenome}`;
            }
        };
    };

    const p1 = criaPessoa('Luiz', 'Otávio');
    console.log(p1.nomeCompleto) */

//Constructor Function
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Luiz', 'Miranda');
p1.nome = 'Outra coisa' //Aqui está sendo mudado o valor de referencia que está na variavel, e não a variavel em si
console.log(p1)