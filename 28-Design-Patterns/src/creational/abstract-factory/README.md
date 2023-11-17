# Abstract Factory

## Intenção

Fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.

---

## Sobre

- É um padrão de criação, portanto lida com a criação de objetos.
- É uma fábrica, assim com o Factory Method e geralmente é composto por múltiplos Factory Methods.
- Visa agrupar famílias de produtos compatíveis criando uma fábrica concreta por grupo de objetos compatíveis.
- Separa o código de criação, do cliente (SRP).
- Fácil implementação (OCP).
- Fica focada nas interfaces e não implementações.

---

| Vantagens | Desvantagens |
| --- | --- |
| Os produtos sempre serão compatíveis entre si | Criação de muitas classes |
| Aplicação de Open/Closed Principle, é fácil adicionar novas fábricas e produtos |  |
| Aplicação do Single Responsability Principle |  |

---

### Exemplo de código

```tsx
// Interfaces abstratas
interface FabricaBotoes {
  criarBotao(): Botao;
}

interface Botao {
  desenhar(): void;
}

// Implementações concretas
class FabricaWindows implements FabricaBotoes {
  criarBotao(): Botao {
    return new BotaoWindows();
  }
}

class BotaoWindows implements Botao {
  desenhar(): void {
    console.log('Botão do Windows desenhado');
  }
}

class FabricaLinux implements FabricaBotoes {
  criarBotao(): Botao {
    return new BotaoLinux();
  }
}

class BotaoLinux implements Botao {
  desenhar(): void {
    console.log('Botão do Linux desenhado');
  }
}

// Cliente
const fabrica: FabricaBotoes = new FabricaWindows();
const botao: Botao = fabrica.criarBotao();
botao.desenhar();  // Output: "Botão do Windows desenhado"
```