// Uma vez que o tipo for inferido, você não consegue mais alterar aquela propriedade
// Assim como no exemplo abaixo, aonde você não consegue criar um novo valor para o objeto
// porque o objeto foi inferido, assumindo que so possuía DOIS valores

/* const objectPrimary = {
  keyA: 'value A',
  keyB: 'value B',
};

objectPrimary.keyA = 'Other value';
objectPrimary.keyC = 'New key';

 */

const objectPrimary: {
  keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown; // Fazendo essa especificação, voçê pode atribuir mais chaves de qualquer tipo a esse objeto
} = {
  keyA: 'value A',
  keyB: 'value B',
};

objectPrimary.keyA = 'Other value';
objectPrimary.keyC = 'New key';
objectPrimary.allKeys = () => {
  console.log({ ...objectPrimary });
};
objectPrimary.keyD = 'KeyD';

console.log(objectPrimary);

//////////////////////////////////////////////////

const objectSecundary: {
  readonly keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'value A',
  keyB: 'value B',
};

//A chave 'keyA', não pode ser alterada pois o seu valor é somente leitura
// objectSecundary.keyA = 'Other value';
objectSecundary.keyC = 'New key';
objectSecundary.allKeys = () => {
  console.log({ ...objectSecundary });
};

console.log(objectSecundary);
