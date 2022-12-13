//               0       1      
const alunos = ['Ruan', 'Matheus']

alunos[0] = 'Erick' //trocar o array no elemento 0
alunos.push('otavio') //Empurrar um novo elemento dentro do array
alunos.unshift('Luiza') //Aiciona um elemento no primeiro indíce (casinha 0)
alunos.unshift('Ruan')
alunos.pop('Matheus') //Remove o ultimo elemento, da pra salvar esse elemento perdido dentro de uma variavel
alunos.shift()//Remove a partir do começo

console.log(alunos)