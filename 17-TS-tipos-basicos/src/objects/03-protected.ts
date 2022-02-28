//Versão longa
export class Enterprise {
  public readonly name: string;
  protected readonly collaborators: Collaborators[] = [];
  private readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addCollaborators(colaborator: Collaborators): void {
    this.collaborators.push(colaborator);
  }

  showCollaborators(): void {
    for (const colaborator of this.collaborators) {
      console.log(colaborator);
    }
  }

  getNome(): string {
    return this.name;
  }
}

export class McInf extends Enterprise {
  constructor() {
    super('MC Informática', '2313123123');
  }

  popCollaborator(): Collaborators | null {
    const colaborator = this.collaborators.pop();

    if (colaborator) return colaborator;
    return null;
  }
}

//Versão curta
export class Collaborators {
  constructor(public readonly name: string, public readonly surname: string) {}
}

export const myEnterprise = new McInf();
export const collaborators1 = new Collaborators('Ruan', 'Silva');
export const collaborators2 = new Collaborators('Suzan', 'rilva');
export const collaborators3 = new Collaborators('Jorger', 'Signori');
const removedCollaborator = myEnterprise.popCollaborator();
console.log(myEnterprise);
console.log(removedCollaborator);
