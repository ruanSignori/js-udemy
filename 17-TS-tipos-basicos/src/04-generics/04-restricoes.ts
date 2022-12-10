// O extends, funciona como uma restrição, como se fosse um limite
type GetKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K];

// Pegar a uma chave de um objeto 
const getKey: GetKeyFn = (obj, key) => obj[key];

const product = {
  name: 'Tesoura',
  price: 13.59,
  quantity: 32,
  color: 'red',
  inventory: [' Estoque 01', 'Estoque 03', 'Estoque 43', 'Estoque 13']
};

const inventory = getKey(product, 'inventory');
const color = getKey(product, 'color');