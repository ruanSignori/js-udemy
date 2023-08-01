import { MyDatabaseClassic } from './db/my-database-classic';
import { myDbClassic as myDbClassicModuleB } from './module_b';

const myDbClassic = MyDatabaseClassic._istance;
myDbClassic.add({ name: 'ruan', age: 30 });
myDbClassic.add({ name: 'FERNANDO', age: 30 });

console.log(myDbClassicModuleB === myDbClassic);
