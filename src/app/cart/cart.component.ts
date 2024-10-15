import { Component } from '@angular/core';
import { CartService, CartItem } from '../cart.service'; // Correct import

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cartItems: CartItem[] = []; // Define the cartItems array as CartItem[]

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getItems(); // Get items from the cart service
  }

  removeFromCart(item: CartItem) {
    this.cartService.removeFromCart(item); // Remove item from cart using service
    this.cartItems = this.cartService.getItems(); // Refresh the cart items after removal
  }

  getTotal() {
    return this.cartService.getTotal(); // Calculate the total price using the cart service
  }
}
