interface CartItem {
  name: string;
  price: number;
}

type OrderStatusCart = 'open' | 'closed';

export class Legacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatusCart = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): CartItem[] {
    return this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): Readonly<OrderStatusCart> {
    return this._orderStatus;
  }

  total(): number {
    const totalValue = +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);

    return totalValue;
  }

  checkout(): void {
    if (this.isEmpty()) {
      return console.log('Seu carrinho está vazio');
    }

    this._orderStatus = 'closed';
    this.sendMessage('Seu pedido foi recebido');
    this.saveOrder();
    this.clearItems();
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }

  clearItems(): void {
    this._items.length = 0;
    console.log('Carrinho de comprar está vazio agora');
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}

const teste = new Legacy();
teste.addItem({ name: 'tesoura', price: 2.5 });
teste.addItem({ name: 'lápis', price: 1.25 });
teste.addItem({ name: 'bojo', price: 4.25 });
teste.addItem({ name: 'caneca', price: 20 });
teste.addItem({ name: 'pote', price: 7.45 });

console.log(teste.orderStatus);
teste.checkout();
