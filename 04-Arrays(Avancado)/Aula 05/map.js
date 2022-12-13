//Map sempre vai ter o msm tamanho do array original
//Map, filter ou reduce não afeta o array ou objeto original, a não ser que tu itere sobre o objeto ou array
//Para não afetar, pode salvar o objeto ou array em uma variavel com spread operator. Ex = const newObj = { ...obj}
//Dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const dobroNumeros = numeros.map(valor => valor * 2);

console.log(dobroNumeros);
