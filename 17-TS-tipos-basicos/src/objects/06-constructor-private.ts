/* export class Database {
  private static database = Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDataBase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Retornando instância já criada');
      return Database.database;
    }
    console.log('Criando nova instância');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const database = Database.getDataBase('LocalHost', 'root', '131515');
database.connect();

const database2 = Database.getDataBase('LocalHost', 'root', '131515');
database2.connect();
 */
