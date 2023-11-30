# Bridge

1. **Abstração (`Abstraction`):** Define a interface da abstração. Mantém uma referência a um objeto da implementação e delega a ele a implementação real.
2. **Implementação (`Implementation`):** Define a interface da implementação. Esta interface não precisa coincidir com a interface da abstração. A implementação fornece operações primitivas que a abstração utiliza para realizar seu trabalho.
3. **Abstração Refinada (`RefinedAbstraction`):** Estende a interface da abstração, adicionando novos métodos ou refinando os já existentes.
4. **Implementação Refinada (`RefinedImplementation`):** Implementa a interface da implementação e é uma extensão direta da implementação base.
5. 

```tsx
// Implementação
interface ColorImplementation {
    applyColor(): string;
}

// Implementações concretas
class RedColor implements ColorImplementation {
    applyColor(): string {
        return "Red";
    }
}

class BlueColor implements ColorImplementation {
    applyColor(): string {
        return "Blue";
    }
}

// Abstração
abstract class Shape {
    protected color: ColorImplementation;

    constructor(color: ColorImplementation) {
        this.color = color;
    }

    abstract draw(): string;
}

// Abstrações refinadas
class Square extends Shape {
    draw(): string {
        return `Drawing a Square with color ${this.color.applyColor()}`;
    }
}

class Circle extends Shape {
    draw(): string {
        return `Drawing a Circle with color ${this.color.applyColor()}`;
    }
}

// Exemplo de uso
const red = new RedColor();
const blue = new BlueColor();

const redSquare = new Square(red);
const blueCircle = new Circle(blue);

console.log(redSquare.draw());  // Output: Drawing a Square with color Red
console.log(blueCircle.draw()); // Output: Drawing a Circle with color Blue
```