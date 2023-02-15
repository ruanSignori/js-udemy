import { Messaging } from '../services/messaging';
import { Persistency } from './persistency';
import { OrderStatusCart } from './protocols/order-status';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatusCart = 'open';
  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): Readonly<OrderStatusCart> {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      return console.log('Seu carrinho está vazio');
    }

    this.messaging.sendMessage(`Seu pedido foi recebido`);
    this.persistency.saveOrder();
    this.cart.clearItems();
  }
}
