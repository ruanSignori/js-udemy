/* eslint-disable prettier/prettier */
import _ from './04-module'
const array = [100, 200, 300, 400]

console.log(_.sum(array))
console.log(_.min(array))
console.log(_.max(array))
console.log(_.mean(array))
console.log(globalThis)
// O _.mul não existe no lodash
// Foi criado a função _.mul em um arquivo separado
// e declarado de forma global no arquivo minha-declaracao.d.ts

console.log(_.mul(array))