import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './classes/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { NoDiscount } from './classes/discount';

const noDiscount = new NoDiscount();
const cart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(cart, messaging, persistency);

cart.addItem(new Product('Tesoura', 2.15));
cart.addItem(new Product('Caderno', 10.9));
cart.addItem(new Product('Estojo', 12.3));
cart.addItem(new Product('Borracha', 0.8));

console.log(cart.total());
console.log(cart.totalWithDicount());
console.log(order.orderStatus);
order.checkout();
