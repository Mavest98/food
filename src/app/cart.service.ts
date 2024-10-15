import { Injectable } from "@angular/core";

export interface CartItem {
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: CartItem[] = []; // Define the cartItems array as CartItem[]

  constructor() {
    this.loadFromLocalStorage(); // Load items from local storage on service initialization
  }

  // Add item to the cart and save to local storage
  addToCart(item: CartItem) {
    this.items.push(item);
    this.saveToLocalStorage(); // Save cart to local storage after adding an item
  }

  // Get all items in the cart
  getItems() {
    return this.items;
  }

  // Clear the cart and save to local storage
  clearCart() {
    this.items = [];
    this.saveToLocalStorage(); // Save cart to local storage after clearing
  }

  // Remove an item from the cart and save to local storage
  removeFromCart(item: CartItem) {
    this.items = this.items.filter(cartItem => cartItem !== item);
    this.saveToLocalStorage(); // Save cart to local storage after removal
  }

  // Get total price of items in the cart
  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  // Save cart items to local storage
  private saveToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  // Load cart items from local storage
  private loadFromLocalStorage() {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      this.items = JSON.parse(savedCart);
    }
  }
}
