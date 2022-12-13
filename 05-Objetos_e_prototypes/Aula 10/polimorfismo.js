
//Superclass
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        this.verSaldo();
        return console.log(`Saldo insuficiente. Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    };
    
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function () {
    console.log(`Ag/c: ${this.agencia} | ${this.conta} | Saldo: R$ ${this.saldo.toFixed(2)}`);
};

function CC (agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);

    this.limite = limite;
};

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        this.verSaldo();
        return console.log(`Saldo insuficiente. Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    };
    
    this.saldo -= valor;
    this.verSaldo();
};

function CP (agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);

};

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;


/*const conta1 = new Conta(11, 22 , 140);
conta1.depositar(13)
conta1.sacar(200)
console.log(conta1)*/

/*const cc = new CC(11, 33, 0, 100);
cc.sacar(120)
console.log(cc)*/

const cp = new CP(12, 31, 0)

cp.depositar(10)
cp.sacar(110)
console.log(cp)