//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nomes = pessoas.map( obj => obj.nome );

//As chaves do objeto iam se tornar chaves da função, adicionando o parenteses virou uma expressão
const idades = pessoas.map( obj => ({ idade: obj.idade }));
    /* Ou
    delete obj.nome;
    return obj;
    */

const comId = pessoas.map( function(obj, indice) {
    const newObj = { ...obj}
    newObj.id = indice + 1;
    return newObj;
});

/* console.log(nomes)
console.log(idades) */
console.log(comId)

console.log(pessoas)