class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 1;
    }
    //Metodo de instancia
    diminuirVolume() {
        this.volume -= 1;
    }
    //Metodo estático
    //Metodos estáticos só consegue acessar pela classe, nesse casso "ControleRemoto".
    //Metodos estáticos não tem acesso aos dados da instancia
    static trocaPilha() {
        console.log('Pilhas trocadas')
    }
}

const controle1 = new ControleRemoto('lg');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
ControleRemoto.trocaPilha()
console.log(controle1)