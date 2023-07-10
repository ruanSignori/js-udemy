import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): CartItem[] {
    return this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    const totalValue = +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);

    return totalValue;
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  clearItems(): void {
    this._items.length = 0;
    console.log('Carrinho de comprar está vazio agora');
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}
