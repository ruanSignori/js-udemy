
/*
    Diferença de var para let e const:

    var: ela pode ser redeclarada ao longo do código

    let: voce não consegue redeclarar o valor da variável
    dentro de let, apenas mudar o seu valor.

    const: não tem como mudar o seu valor
    e também não podem ficar sem valor nenhum
*/

//Redeclaração com var
var nome = 'Luiz';
var nome = 'Pedro';
console.log(nome)

//Muda o valor com let
let nome2 = 'Ruan'
nome2 = 'Lucas'
console.log(nome2)

//const não pode mudar o seu valor entao dara ERRO
const nome3 = 'Sergio'

const nome3 = 'Paulo'
    //OU
nome3 = 'Robson'
