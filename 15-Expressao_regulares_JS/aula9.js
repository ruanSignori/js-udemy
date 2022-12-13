const { lookahead } = require('./base');

// Retorna somente as linhas que estão escritas active
// console.log(lookahead.match(/.*\sactive$/gim));

// POSITIVE LOKAHEAD
// console.log(lookahead.match(/.+(?=\sactive)/gim)); // Frases que tem active

// NEGATIVE LOKAHEAD
// console.log(lookahead.match(/^(?!.+[^in]active).+$/gim)); // Frases que não tem a palavra active
// console.log(lookahead.match(/^(?!.*inactive).+$/gim));  // Frases que não tem a palavra inactive


////////////////////////////////////////////////////////////////////

// POSITIVE LOOKBEHIND (Frases que começam com online)
// console.log(lookahead.match(/(?<=ONLINE\s+)\S .*/gim));

// NEGATIVE LOOKBEHIND (Frases que nãocomeçam com online)
// console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim));

const cpf = `
012.250.796-10
111.111.111-11
147.285.963-10
`
console.log(cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)(\d{3}\.){2}\d{3}-\d{2}$/gm));