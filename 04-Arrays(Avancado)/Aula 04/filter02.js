//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

//                                               ARROW FUNCTION
const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 5 );

const pessoasVelhas = pessoas.filter(obj => obj.idade > 50);

const pessoasComA = pessoas.filter(obj => {
    obj.nome.toLowerCase().endsWith('a');
});

console.log(pessoasNomeGrande)
console.log(pessoasVelhas)
console.log(pessoasComA)