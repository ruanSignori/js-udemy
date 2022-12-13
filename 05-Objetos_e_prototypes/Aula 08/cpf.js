//VALIDANDO UM CPF Algoritmo
//  705.484.450-52 | 070.987.720.03

/*
    7x  0x  5x  4x  8x  4x  4x  5x  0x         9 primeiros digitos do cpf
    10  9   8   7   6   5   4   3   2          Contagem regressiva
    70  0   40  28  48  20  16  15  0 = 237    Total

    11 - (237 % 11) = 5 (Primeiro digito)   Se sair um numero maior que nove, considerado 0

    Agora incluir o restulado da conta acima, nesse caso foi o 5

    7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
    11  10  9   8   7   6   5   4   3   2
    77  0   45  32  56  24  20  20  0   10 = 284

    11 - (284 % 11) = 2 (Segundo digito)     Se sair um numero maior que nove, considerado 0

*/

let cpf = '705.484.450-52';
cpf = cpf.replace(/\D+/g, ''); //Expressao regular para saber se tem algo diferente de numero e nesse caso, subistituir por nada
let cpfArray = Array.from(cpf)
console.log(cpfArray);
console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));