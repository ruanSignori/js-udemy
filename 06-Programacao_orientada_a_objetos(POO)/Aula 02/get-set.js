const _velocidade = Symbol('velocidade');

class Carro {
    constructor (nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor){
        console.log('SETTER')
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;

        this[_velocidade] = valor;
    }    

    get velocidade(){
        console.log('GETTER')
        return this[_velocidade]
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const carro1 = new Carro('Celta');

/*for(let i = 0; i <= 200; i++) {
    carro1.acelerar();
}*/
carro1.velocidade = 70;
console.log(carro1.velocidade);