//Versão longa
export class Enterprise {
  public readonly name: string;
  private readonly collaborators: Collaborators[] = [];
  protected readonly cnpj: string;

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

//Versão curta
export class Collaborators {
  constructor(public readonly name: string, public readonly surname: string) {}
}

const myEnterprise = new Enterprise('/\n./g', '00.00.000/300-23');
const collaborators1 = new Collaborators('Ruan', 'Silva');
const collaborators2 = new Collaborators('Suzan', 'rilva');
const collaborators3 = new Collaborators('Jorger', 'Signori');

myEnterprise.addCollaborators(collaborators1);
myEnterprise.addCollaborators(collaborators2);
myEnterprise.addCollaborators(collaborators3);

console.log(myEnterprise);
myEnterprise.showCollaborators();
