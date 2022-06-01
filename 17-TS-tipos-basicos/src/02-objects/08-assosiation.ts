export class Writer {
  private _tools: Tool | null = null;

  constructor(private _name: string) {}

  set writeWithTool(tool: Tool | null) {
    this._tools = tool;
  }

  get name(): string {
    return this._name;
  }

  get toolReceveid(): Tool | null {
    return this._tools;
  }

  writer(): void {
    if (this.toolReceveid === null) {
      console.log("I can't write because without tool");
      return;
    }

    this._tools?.writer();
  }
}

export abstract class Tool {
  constructor(private _name: string) {}

  abstract writer(): void;

  get name(): string {
    return this._name;
  }
}

export class Pen extends Tool {
  writer(): void {
    console.log(`${this.name} está escrevendo....`);
  }
}

export class Typewriter extends Tool {
  writer(): void {
    console.log(`${this.name} está digitando...`);
  }
}

const writer = new Writer('Ruan');
const pen = new Pen('Faber Castel');
const typewriter = new Typewriter('eae');

console.log(writer.name);
console.log(pen.name);
console.log(typewriter.name);
