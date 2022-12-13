class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado) {
            console.log(`${this.nome} está ligado`);
            return;
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} está desligado`);
        }
        
        this.ligado = false;
    }
}

//Classe que está herdando tudo oq tem na class DispositivoEletronico
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
        //Super é obrigatorio quando usado extends
        super(nome);
        this.cor = cor;
        this.modelo = modelo
    }
}

class Notebook extends DispositivoEletronico {
    constructor(nome, configurações, cor){
        super(nome);
        this.configurações = configurações;
        this.cor = cor;
    }

    
}

const s1 = new Smartphone('Iphone', 'Preto', 'Iphone 11 pro max');
s1.ligar(); 
console.log(s1);

const notebook = new Notebook('Lenovo', 'Intel i3 7th, 4gb ram, 500gb HD, h110-hg4 Asrock, Gt 210', 'Vermelho');
notebook.ligar();
console.log(notebook);