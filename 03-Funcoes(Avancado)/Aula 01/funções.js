//Function expression
//A função é um objeto de primeira classe, e pode ser tratado como um dado naturalemente
const souUmDado = function(){
    console.log('Eu sou um dado de armazenamento');
};
souUmDado()

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo')
    funcao()   
}

executaFuncao(souUmDado);

