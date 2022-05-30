// Encadeamento opcional e Operador coalescência nula
type Documentation = {
  title: string;
  body: string;
  data?: Date;
};

const doc: Documentation = {
  title: 'TS & JS Udemy',
  body: 'Curso de typescript e javascript',
};

console.log(doc.data?.toDateString() ?? 'Data é null ou undefined');

/* 
? = 'Se a expressão que está do lado esquerdo vor verdadeira, executa o que está a direta'
?? = 'Se o valor que estã no lado esquerdo for NULL ou UNDEFINED, executa o que está a direita' 
*/
