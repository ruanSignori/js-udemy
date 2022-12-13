const { texto, arquivos } = require('./base');
// * (opcionais) 0 ou n
// + (obrigatório) 1 ou n
// ? (opcionais) 0 ou 1
// {n, m} minimo e máximo
// {10, } no minimo 10
// {, 10} de 0 a 10
// {3, 10} de 3 a 10


/* const regExp1 = /j+o+ã+o+/gi

log(texto.match(regExp1)) */

const regExp2 = /\.jpe?g/gi;

arquivos.map(value => log(value.match(regExp2)));















function log(msg) { 
  return console.log(msg)
}