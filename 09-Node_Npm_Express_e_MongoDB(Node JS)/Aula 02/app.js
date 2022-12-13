const path = require('path');

console.log(path.resolve(__dirname, '..', '..', '01 JavaScript Básico', 'Aula 01'))

console.log(__filename) //Mostra o caminho do arquivo atual, desde a raiz do computador
console.log(__dirname) //Mostra o caminho da pasta atual, desde a raiz do computador



const Pet = require('./A/B/B2/mod2.js'); //geralmente não usado extensão js, se não for um arquivo Js usar a extensão

const pitas = new Pet('Pitoco')

pitas.latir()


/*const Dog = require('./A/B/C/D/mod')

const c1 = new Dog('Pitoco')

console.log(c1)*/

//  . representa a pasta atual
// .. retorna uma pasta
// ../../ nesse caso retorna duas pastas