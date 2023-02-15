import { Messaging } from './messaging';
import { Order } from './order';
import { Persistency } from './persistency';
import { Product } from './product';
import { ShoppingCart } from './shopping-cart';

const cart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(cart, messaging, persistency);

cart.addItem(new Product('Tesoura', 2.15));
cart.addItem(new Product('Caderno', 10.9));
cart.addItem(new Product('Estojo', 12.3));
cart.addItem(new Product('Borracha', 0.8));

console.log(order.orderStatus);
order.checkout();
