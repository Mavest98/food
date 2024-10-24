import { Injectable } from "@angular/core";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: CartItem[] = [];

  constructor() {}

  // Add item to the cart
  addToCart(item: CartItem): void {
    this.items.push(item);
  }

  // Get all cart items
  getItems(): CartItem[] {
    return this.items;
  }

  // Remove item from cart
  removeFromCart(item: CartItem): void {
    this.items = this.items.filter(i => i.id !== item.id);
  }

  // Calculate total price
  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Clear the cart
  clearCart(): void {
    this.items = [];
  }
}
