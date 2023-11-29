# Adapter

Converter a interface de uma classe em outra interface esperado pelos os clientes.

- **Target (Alvo):** Define a interface específica do domínio que o cliente utiliza.
- **Client (Cliente):** Colabora com objetos que seguem a interface do Target.
- **Adaptee (Adaptado):** Define uma interface existente que precisa ser adaptada.
- **Adapter (Adaptador):** Implementa a interface do Target e mantém uma referência ao Adaptee, adaptando as chamadas de métodos do Target para o Adaptee.

Exemplo de código

```tsx
// Target
interface Target {
    request(): void;
}

// Adaptee
class Adaptee {
    specificRequest(): void {
        console.log("Adaptee's specific request");
    }
}

// Adapter
class Adapter implements Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        this.adaptee = adaptee;
    }

    request(): void {
        // Adaptando a chamada para o Adaptee
        this.adaptee.specificRequest();
    }
}

// Client
class Client {
    operate(target: Target): void {
        target.request();
    }
}

// Uso do Adapter
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
const client = new Client();
client.operate(adapter);
```