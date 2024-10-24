import { Component } from '@angular/core';
import { CartService } from '../cart.service'; // Import the CartService

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.scss']
})
export class SpecialsComponent {

  // Define your food items array
  foodItems = [
    { id: 8, name: 'Wednesday Specials', description: 'Up to 5% off.', price: 100, quantity: 1 }, // Added the price value
  ];

  constructor(private cartService: CartService) {} // Inject the CartService

  // Add item to cart using CartService
  addToCart(item: any) {
    this.cartService.addToCart(item); // Call CartService to add item to the cart
    alert(`${item.name} added to cart!`);
  }
}
