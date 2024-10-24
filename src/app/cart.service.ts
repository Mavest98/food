import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];
  private itemsSubject = new BehaviorSubject<CartItem[]>(this.items);
  items$ = this.itemsSubject.asObservable();

  constructor() {
    this.loadCart();
  }

  addToCart(item: CartItem) {
    const existingItem = this.items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push(item);
    }
    this.saveCart();
    this.itemsSubject.next(this.items);
  }

  removeFromCart(item: CartItem) {
    const index = this.items.findIndex(i => i.id === item.id);
    if (index > -1) {
      this.items.splice(index, 1);
    }
    this.saveCart();
    this.itemsSubject.next(this.items);
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  private saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  private loadCart() {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      this.items = JSON.parse(savedCart);
      this.itemsSubject.next(this.items);
    }
  }
}
