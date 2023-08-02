import { MyDatabaseFunction } from './db/my-database-function';
import { myDbModuleB } from './module_b';

const myDbModule = MyDatabaseFunction;
myDbModule.add({ name: 'ruan', age: 30 });
myDbModule.add({ name: 'FERNANDO', age: 30 });

console.log(myDbModule === myDbModuleB);
