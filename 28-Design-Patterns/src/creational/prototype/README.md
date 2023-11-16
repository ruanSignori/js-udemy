# Prototype

## Intenção

Especificar os tipos de objetos a serem criados usando uma instância-protótipo e criar novos objetos peça cópia desse protótipo.

## TypeScript

- Linguagem baseada em protótipos.
- Objetos estão diretamente ligados a outros objetos.
- Você pode fazer um objeto “herdar” de outro objeto.
- A “herança” é obtida via delegação (um objeto delega algo para o seu protótipo).
- É comum o uso de classes ou funções construtoras para manipular os protótipos.

## Visão geral

- O tipo de objeto a ser criado é determinado pelo o objeto protótipo.
- É tipicamente usado para evitar a recriação de objetos.
- Ajuda a evitar a explosão de subclasses (`extends`).
- Pode (ou não) manter um registro de objetos protótipo em um objeto separado.
- Geralmente é criado apenas com um método “clone” dentro do objeto protótipo.
- Evita que o cliente conheça as classes que criam os objetos.

## Exemplo

```tsx
interface Prototype {
	clone(): Prototype;
}

class Person implements Prototype {
	constructor(public name: string, public age: number) {}

	clone(): this {
		const newPerson = Object.create(this);
		return newPerson;
	}
}

const personOne = new Person('Andrew', 12);
const personTwo = personOne.clone();

console.log(personOne.name); // Output: Andrew
console.log(personTwo.name); // Output: Andrew
```

## Aplicabilidade

- Use o padrão prototype quando precisar que seu código não dependa de classes concretas para a criação de novos objetos
- Use o padrão prototype quando quiser evitar explosão de subclasses para objetos muito similares
- Evite a recriação de objetos