// g - global = encontra todas as palavras ou condições que a sua RegExp passou
// i - insensitive() = encontra tudo, independente de ser minusculo ou maiusculo, comba com g 
// () - grupo 
// | = ou

const { texto } = require('./base');

const regExp1 = /(caralho|burro)( mas joao)/i;

const found = regExp1.exec(texto);

console.log(found[0]);
