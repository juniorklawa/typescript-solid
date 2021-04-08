import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camisa', 49.9));
shoppingCart.addItem(new Product('Caderno', 39.9));
shoppingCart.addItem(new Product('Lápis', 1.9));

order.checkout();

console.log(order.orderStatus);
