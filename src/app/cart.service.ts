import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// CartItem interface to define the structure of items in the cart
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
  private itemsSubject = new BehaviorSubject<CartItem[]>(this.items); // Observable for cart items
  items$ = this.itemsSubject.asObservable(); // Expose as observable

  constructor() {
    this.loadCart(); // Load cart from localStorage when the service is initialized
  }

  // Add item to the cart
  addToCart(item: CartItem) {
    const existingItem = this.items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity; // Update quantity if item exists
    } else {
      this.items.push(item); // Add new item
    }
    this.saveCart(); // Save cart to localStorage
    this.itemsSubject.next(this.items); // Notify subscribers
  }

  // Remove item from the cart
  removeFromCart(item: CartItem) {
    const index = this.items.findIndex(i => i.id === item.id);
    if (index > -1) {
      this.items.splice(index, 1); // Remove item
    }
    this.saveCart(); // Save updated cart to localStorage
    this.itemsSubject.next(this.items); // Notify subscribers
  }

  // Get all cart items
  getItems(): CartItem[] {
    return this.items;
  }

  // Clear all items from the cart
  clearCart() {
    this.items = [];
    this.saveCart(); // Clear cart in localStorage as well
    this.itemsSubject.next(this.items); // Notify subscribers
  }

  // Get the total cost of the cart
  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Save cart items to localStorage
  private saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  // Load cart items from localStorage
  private loadCart() {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      this.items = JSON.parse(savedCart);
      this.itemsSubject.next(this.items); // Load the cart items into the observable stream
    }
  }
}
