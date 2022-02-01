const { alfabeto } = require('./base');

/* console.log(alfabeto.match(/[^abc123]+/g)); */
// console.log(alfabeto.match(/[^0-9]+/gi));
// console.log(alfabeto.match(/[a-z0-9]+/gi));
// console.log(alfabeto.match(/[\u00A0-\u00BA]+/g));

console.log(alfabeto.match(/\w+/g));