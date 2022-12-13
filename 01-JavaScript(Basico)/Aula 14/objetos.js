function criaPessoa (nome, sobrenome, idade){

    return {nome, sobrenome, idade}; //Quando quero retornar apenas esses valores, n precisa redeclarar eles q nem no exemplo abaixo
    /*OU
        return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }; */
}
const pessoa1 = criaPessoa('Ruan','Pablo', 16)
console.log(pessoa1.idade)