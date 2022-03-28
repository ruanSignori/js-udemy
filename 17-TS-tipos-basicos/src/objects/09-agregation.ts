export class ShoppingCart {
  private readonly products: Product[] = [];

  insertionProducts(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  amountTotalProducts(): number {
    return this.products.length;
  }

  totalValue(): number {
    return this.products.reduce((acc, product) => acc + product.price, 0);
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

const product1 = new Product('Camiseta', 50.3);
const shoppingCart = new ShoppingCart();

shoppingCart.insertionProducts(product1, product1);

console.log(shoppingCart.totalValue());
