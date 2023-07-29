# Singleton

### Intenção

Garantir que uma classe tenha somente uma instância no programa e fornecer um ponto de acesso global para a mesma.

## Somente uma instância

- Geralmente usado para acessar **recursos compartilhados,** como acesso à base de dados, interfaces gráficas, servidores de impressão, etc…
- Usado para substituir variáveis globais, como o uso de ********objetos de configuração do sistema******** (`tailwind.config.js`).

## Ponto de acesso global

- Você pode permitir acesso global ao Singleton, em toda a sua aplicação, assim como é feito com variáveis globais.
- Pode ser protegida com encapsulamento, evito que outro código sobrescreva o seu valor.

## Exemplo de implementação

```tsx
export class Singleton {
	// O valor de Singleton, inicialmente vai ser nullo
	private static _instance: Singleton | null = null;
	
	// Não permite que seja usado new Singleton, fora da classe
	private constructor() {}
	
	// Se o singleton não foi criado, cria uma nova instância
	// Isso permite que não tenha duas istâncias criadas no mesmo programa
	static get instance(): Singleton {
		const firstCallSingleton = Singleton._istance === null

		if (firstCallSingleton) {
			Singleton._instance = new Singleton()
		}

		return Singleton._instance;
	}
}

// Como o Singleton está sendo chamado pela primeira vez, ele tinha o valor nulo, mas foi criado um novo Singleton
const istanceOne = Singleton.istance;
// O istance não é mais nulo, e vai retornar o Singleton criado anteriormente, ou seja agora as duas varíaveis tem o mesmo o Objeto
const istanceTwo = Singleton.istance;

console.log(istanceOne === istanceTwo);
// Output: true
```

## Aplicabilidade

- Usado quando uma classe precisa ter somente um instância disponível em todo o programa.
- Utilizado quando perceber que está usando variáveis globais para manter partes importantes do seu programa, como variáveis de configuração.