const { texto } = require('./base');

// ((...)) (...) (...) $1 $2 $3 $4 = o $n => Representa a quantidade de grupos

const regExp1 = /João/gi;

//console.log(texto.match(regExp1));
//console.log(texto.replace(/João|Maria/gi, 'Ruan'));
console.log(texto.replace(/(joão|maria)/gi, input => input.toUpperCase()));
