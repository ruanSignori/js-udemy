import { MyDatabaseModule } from './db/my-database-model';

const myDbModuleB = MyDatabaseModule;
myDbModuleB.add({ name: 'eu sou o B', age: 30 });
myDbModuleB.add({ name: 'eu também sou o B', age: 30 });

export { myDbModuleB };
