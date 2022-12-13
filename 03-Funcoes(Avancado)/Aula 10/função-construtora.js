
//Função fabrica = fabrica objetos
/* Função construtora = constroi objetos
    O nome da função tem que começar com letra miusculas.
    quando chamar a função precisar usar New
    Não precisar usar virgula para seprar objetos
    // NEW
*/

function Pessoa(nome, sobrenome){
    const ID = 12345;

    const metodoInterno = function(){

    }
    //This nesse caso esta se referindo a Pessoa
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function(){
        console.log(this.nome + ': Sou um método')
    }
}

const p1 = new Pessoa('Ruan' , 'Signori');
const p2 = new Pessoa('Andre', 'Luiz');

p1.metodo();