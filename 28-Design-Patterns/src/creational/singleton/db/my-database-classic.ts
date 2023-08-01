interface User {
  name: string;
  age: number;
}

export class MyDatabaseClassic {
  private static istance: MyDatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  public static getIstance(): MyDatabaseClassic {
    if (MyDatabaseClassic.istance === null) {
      MyDatabaseClassic.istance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic.istance;
  }

  public add(user: User): void {
    this.users.push(user);
  }

  public remove(index: number): void {
    this.users.splice(index, 1);
  }

  public show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
