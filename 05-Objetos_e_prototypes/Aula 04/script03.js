const produto = { nome: 'Ruan', idade: 15};

console.log(Object.keys(produto),Object.values(produto));
console.log(Object.entries(produto));

for(let entry of Object.entries(produto)) {
    console.log(entry)
}

//Destructor
for (let[chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}