import { Messaging } from '../services/messaging';
import { Persistency } from './persistency';
import { OrderStatusCart } from './interfaces/order-status';
import { ShoppingCart } from './shopping-cart';
import { CustomerOrder } from './interfaces/customer-protocol';

export class Order {
  private _orderStatus: OrderStatusCart = 'open';
  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): Readonly<OrderStatusCart> {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      return console.log('Seu carrinho está vazio');
    }

    this.messaging.sendMessage(
      `Seu pedido com total de R$${this.cart.total()} foi recebido`,
    );
    this.persistency.saveOrder();
    this.cart.clearItems();

    console.log(
      `O cliente é: ${this.customer.getName()}, ${this.customer.getIDN()}`,
    );
  }
}
