
// Factory Function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa (nome, sobrenome, altura, peso){
    return {
        nome, 
        sobrenome,

        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
        },

        fala(assunto){
            return `${this.nome} está falando sobre ${assunto}.`;
        },
        altura: altura,
        peso: peso,

        // Getter , a gente usa get, só para obter o valor da antiga função transformando ela em módulo
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'otavio', 1.8, 80)
console.log(p1.imc)//A palavra this. se refere a quem está chamando o objeto, nesse caso o p1
p1.nomeCompleto = 'Ruan Pablo Signori';
console.log(p1.nome);
console.log(p1.sobrenome)
console.log(p1.fala('Rocket League'))




