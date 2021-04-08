import { ICartItem } from './interfaces/cart-item';

export class ShoppingCart {
  private readonly _items: ICartItem[] = [];

  addItem(item: ICartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<ICartItem[]> {
    return this._items;
  }

  total(): number {
    return Number(
      this._items.reduce((acc, item) => acc + item.price, 0).toFixed(2),
    );
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
  }
}
