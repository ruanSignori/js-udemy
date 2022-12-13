const { cpfs2 } = require('./base');


const cpf =  '254.224.877-45';
const regExpCPF = /^(\d{3}\.){2}\d{3}-\d{2}$/gm;

console.log(cpfs2.match(regExpCPF));
