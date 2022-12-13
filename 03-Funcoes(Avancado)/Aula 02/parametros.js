/* Em js se voce enviar um parametro e ele não foi definido, nao vai dar erro
o js simplesmete vai ignorar o parametro */

/* Quando utilizo a palavra function, há uma variável especial (arguments), que 
sustenta todos os argumentos enviados como parametros para a função */

function funcao(a, b, c){
    let total = 0;
    for (let argumento of arguments){
        total += argumento
    }
    console.log(a, b, c)
    console.log(total)
}

funcao(23,21,3,12,312);


//O js acaba criando como variavel os parametros vazios
function funcao2(a, b, c, d, e, f){
    console.log(a, b, c, d, e ,f)
}
funcao2(1, 2, 3, 4)