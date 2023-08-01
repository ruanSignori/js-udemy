import { MyDatabaseModule } from './db/my-database-model';
import { myDbModuleB } from './module_b';

const myDbModule = MyDatabaseModule;
myDbModule.add({ name: 'ruan', age: 30 });
myDbModule.add({ name: 'FERNANDO', age: 30 });

console.log(myDbModule === myDbModuleB);
