// Mesclando tipos
export function joinObject<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
  // Jeito 1 de mesclar objeos
 //  return {...obj1, ...obj2};

 return Object.assign({}, obj1, obj2);
}

const obj1 = { key1: '1valor 1'};
const obj2 = { key2: 'valor2'};

const joining = joinObject(obj1, obj2);

console.log(joining)