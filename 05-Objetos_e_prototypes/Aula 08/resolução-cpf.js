
function ValidateCpf(cpf){

    Object.defineProperty(this, 'cpfClear', {
        enumerable: true,
        get: function () {
            return cpf.replace(/\D+/g, '');
        }
    });
};

ValidateCpf.prototype.valida = function() {
    if (typeof this.cpfClear === 'undefined') return false;
    if (this.cpfClear.length !== 11) return false;
    if (this.isSequence())  return false;

    const cpfPartial = this.cpfClear.slice(0, -2);

    const digit1 = this.createDigit(cpfPartial);
    const digit2 = this.createDigit(cpfPartial + digit1)
    
    const newCpf = cpfPartial + digit1 + digit2;

    return newCpf === this.cpfClear;
};

//Fazer a validação do penultimo digito do cpf
ValidateCpf.prototype.createDigit = cpfPartial => {
    const cpfArray = Array.from(cpfPartial);
    let regressive = cpfArray.length + 1;

    let total = cpfArray.reduce((ac, val) => {
        ac += (regressive* Number(val));
        regressive--;
        return ac;
    }, 0);
    
    const digit = 11 - (total % 11);
    return digit > 9 ? '0' : String(digit);
};

ValidateCpf.prototype.isSequence = function (){
    const sequence = this.cpfClear[0].repeat(this.cpfClear.length);
    return sequence === this.cpfClear;
};

const cpf  = new ValidateCpf('020.298.590-36');

if (cpf.valida()) {
    console.log('Cpf válido');
} else {
    console.log('Cpf inválido')
};