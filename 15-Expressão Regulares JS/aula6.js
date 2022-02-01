const { cpfs, ips } = require('./base');

// regExp CPF1 = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/g

/* const getAllCPF = cpfs.match(/(\d{3}\.){2}\d{3}-\d{2}/g);
console.log(getAllCPF);
 */


const getAllIPS = ips.match(/\d+\./g);

console.log(ips.match(/\d\S+/g))
console.log(getAllIPS);