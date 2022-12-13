module.exports = class Animal {
    constructor(nome) {
        this.nome = nome
    }

    latir() {
        console.log(`Eu tinha um cachorrinho com nome de ${this.nome}`);
    }
}