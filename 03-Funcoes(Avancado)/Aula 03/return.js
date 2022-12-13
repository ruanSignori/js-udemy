//Não precisa colocar nome: nome, se o parametro já tem esse nome
function criaPessoa(nome, sobrenome){
    return{
        nome: nome, sobrenome: sobrenome
    }
}

//O Js assume a cham
function criaPessoa1(nome, sobrenome){
    return {nome, sobrenome};
}

const p1 = criaPessoa1('Luiz', 'Otávio');

console.log(p1)