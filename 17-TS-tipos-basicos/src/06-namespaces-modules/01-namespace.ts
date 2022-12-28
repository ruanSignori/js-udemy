// serve para criar um escopo e utilizar
namespace MyNameSpace {
  const name = 'Ruan'
  
  export class PersonNameSpace {
    constructor(
      public name: string 
    ) {}
  }

  const person = new PersonNameSpace('Ruan')

  export namespace SecundaryNameSpace {
    export const nameSpace2 = 'Nome secundário'
  }
}

const newPerson = new MyNameSpace.PersonNameSpace('Abajsf');
console.log(MyNameSpace.SecundaryNameSpace.nameSpace2)

