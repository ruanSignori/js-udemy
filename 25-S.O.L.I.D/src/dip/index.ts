import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './classes/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { NoDiscount } from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';
import { MessagingProtocol } from './classes/interfaces/messaging-protocol';

const noDiscount = new NoDiscount();
const cart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  'Ruiz',
  'eaeas',
  '321.361.612.-75',
);
const enterpriseCustomer = new EnterpriseCustomer(
  'Ferstock',
  '039.293/0001-32',
);

class MessagingMock implements MessagingProtocol {
  sendMessage(): void {
    console.log('A mensagem foi enviada');
  }
}

const messagingMock = new MessagingMock();

const order = new Order(cart, messagingMock, persistency, enterpriseCustomer);

cart.addItem(new Product('Tesoura', 2.15));
cart.addItem(new Product('Caderno', 10.9));
cart.addItem(new Product('Estojo', 12.3));
cart.addItem(new Product('Borracha', 0.8));

console.log('Total do pedido:', cart.total());
console.log('Total com desconto:', cart.totalWithDiscount());
console.log('Ordem do pedido:', order.orderStatus);
order.checkout();
