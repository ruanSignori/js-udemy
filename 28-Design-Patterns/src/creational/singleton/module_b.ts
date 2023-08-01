import { MyDatabaseClassic } from './db/my-database-classic';

const myDbClassic = MyDatabaseClassic.getIstance();
myDbClassic.add({ name: 'eu sou o B', age: 30 });
myDbClassic.add({ name: 'eu também sou o B', age: 30 });

myDbClassic.show();
