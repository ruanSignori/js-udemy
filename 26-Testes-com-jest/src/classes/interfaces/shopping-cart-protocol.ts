import { CartItem } from './cart-item';

export interface ShoppingCartProtocol {
  items: Readonly<CartItem[]>;
  addItem(item: CartItem): void;
  removeItem(index: number): CartItem[];
  total(): number;
  totalWithDiscount(): number;
  clearItems(): void;
  isEmpty(): boolean;
}
