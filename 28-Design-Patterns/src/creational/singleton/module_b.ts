import { MyDatabaseFunction } from './db/my-database-function';

const myDbModuleB = MyDatabaseFunction;
myDbModuleB.add({ name: 'eu sou o B', age: 30 });
myDbModuleB.add({ name: 'eu também sou o B', age: 30 });

export { myDbModuleB };
