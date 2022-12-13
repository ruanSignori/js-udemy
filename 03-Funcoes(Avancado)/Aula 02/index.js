//Caso o parametro n receba nenhum argumento, ele tera esses valores como padrão
function soma (a, b = 2, c = 4){
    console.log(a + b + c);
}

soma(2, undefined, 10);

function funcao ({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade)
}
funcao({ nome: 'Ruan', sobrenome: 'Signori', idade: 20})

function array([valor1, valor2, valor3, valor4]){
    console.log(valor1, valor2, valor3, valor4)
}

array(['nome', 'andre', 'sergio', 'felipe'])