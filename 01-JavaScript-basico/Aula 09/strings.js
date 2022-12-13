//                01234567  
let umaString  = 'Um rato roeu a roupa do rei de roma'

console.log(umaString[4]) //Qualquer letra que a gente buscar fora do range da palavra dara undefined
console.log(umaString.charAt(4)) //charAt = vai buscar a letra selecionada
console.log(umaString.match(/[a-z]/g)) // vai procurar todas as letras do texto que estiverem em minuscula
console.log(umaString.search(/x/)) // vai procurar especificamente a letra x dentro de um texto e mostrar qual "casinha numérica" dela
console.log(umaString.replace('Um', 'Outro')) //Vai substituir a primeira palavra pela outra selecionada
console.log(umaString.replace(/r/g, 'l')) //vai trocar todas as letras "r" pela outra selecionada
console.log(umaString.length) //mostra quantos caracteres tem a frase em valor numérico
console.log(umaString.slice(-5, -1)) //Vai pegar todo o valor da string (length) e vai mostrar qual letra é o valor selecionado
console.log(umaString.toLocaleUpperCase()) //Coloca toda a frase com letras maísculas
console.log(umaString.toLocaleLowerCase()) //Coloca toda a frase com letras minusculas