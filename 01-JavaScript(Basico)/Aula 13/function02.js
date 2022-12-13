function soma(x = 1, y = 2){
    const resultado = x + y
    return resultado;//Quando return é declarado a função termina
}
const resultado = soma(4,3);
console.log(resultado)
//A const pode ser redeclarada porque tudo que está dentro da função está "Protegido", não tem como alterar.


const raiz =  function(n){
    return n ** 0.5
};//Ponto e virgula é necessario
console.log(raiz(9))
//Também pode ser redeclarado assim:

const raiz1 = n => n ** 0.5; //Utilizado para Funções menores, ARROW FUNCTION
console.log(raiz1(81))