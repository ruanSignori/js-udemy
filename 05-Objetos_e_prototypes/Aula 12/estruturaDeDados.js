const pessoas = [
    { id: 3, nome: 'Luiz'},
    { id: 2, nome: 'Fernando'},
    { id: 1, nome: 'Helena'},
];

/*const novasPessoas = {};
for (const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas[id] = { ...pessoa};
}*/

const novasPessoas = new Map();
for (const pessoa of pessoas){
    const { id } = pessoa;

    //atribuir o restante do valora das pessoas ao new Map
    novasPessoas.set(id, { ...pessoa});
}

/*for (const pessoa of novasPessoas){
    console.log(pessoa)
}*/


console.log(novasPessoas.get(2))
novasPessoas.delete(3)
console.log(novasPessoas);
