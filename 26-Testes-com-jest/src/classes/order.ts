import { OrderStatusCart } from './interfaces/order-status';
import { CustomerOrderProtocol } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';

export class Order {
  private _orderStatus: OrderStatusCart = 'open';
  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrderProtocol,
  ) {}

  get orderStatus(): Readonly<OrderStatusCart> {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      return console.log('Seu carrinho está vazio');
    }
    this._orderStatus = 'closed';

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
