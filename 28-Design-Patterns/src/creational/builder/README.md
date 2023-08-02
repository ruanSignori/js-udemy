# Builder

## Intenção

Separar a construção de um objeto complexo da sua representação de modo que o mesmo processo de construção possa criar diferentes representações

### Visão geral

- O padrão sugere a separação do código que cria e o código que usa o objeto
- Trata de criação de objetos complexos
    - Construtores muitos complexos (muitos parâmetros)
    - Composição de vários objetos (composite)
    - Algoritmo de criação de objeto complexo
- Permite a criação de objetos em etapas
- O objeto final pode variar de acordo com a necessidade
- É um padrão complexo

## Exemplo de Builder

```tsx
export class PersonBuilder {
	private person = new Person();

	// Zerar a pessoa
	newPerson():void {
		this.person = new Person();
	}

	setName(name: string): this {
		this.person.name = name;
		return this;
	}

	setAge(age: number): this {
		this.person.age = age;
		return this;
	}

	getResult(): Person {
		return this.person
	}
}

const personBuilder = new PersonBuilder();
const person1 = personbuilder.setName('Ruan').setAge(20).getResult();
personbuilder.newPerson();
const person2 = personbuilder.setName('Alex').setAge(13).getResult()
```