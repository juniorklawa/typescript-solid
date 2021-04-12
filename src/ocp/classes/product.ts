import { ICartItem } from './interfaces/cart-item';

export class Product implements ICartItem {
  constructor(public name: string, public price: number) {}
}
