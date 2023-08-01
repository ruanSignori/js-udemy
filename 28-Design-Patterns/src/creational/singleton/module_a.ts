import { MyDatabaseClassic } from './db/my-database-classic';
import './module_b';

const myDbClassic = MyDatabaseClassic.getIstance();
myDbClassic.add({ name: 'ruan', age: 30 });
myDbClassic.add({ name: 'FERNANDO', age: 30 });

myDbClassic.show();
