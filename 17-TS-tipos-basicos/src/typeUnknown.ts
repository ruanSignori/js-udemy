//Tipo Any só que mais seguro, é o pai da hierarquia de tipos
//Você precisa checar o tipo antes de fazer qualquer operação com a variável, assim como o exemplo abaxio

export let x: unknown;
x = 100;
x = 'Luan';
x = 900;
const y = 800;

if (typeof x === 'number') console.log(x + y);
