// Encontra todas as palavras
const allWords = /([\wÀ-ú+]+)/gim

// Coisas que não sao números
const notNumbers = /\D/

// Valida IP
const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g

// Localizar tags HTMl em um texto
const htmlRegExp = /(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/g

// Valida CPF
const cpfRegExp = /(?:\d{3}\.){2}\d{3}-\d{2}/g

// Valida Número de Celular
const numTel = /^(\(\d{2}\))?\s?9?\s*\d{4}-\d{4}$/

// Senha forte (Mínimo 8 caracateres que contem: númeors, letras maiusculas e minusculas);
const strongPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8}/