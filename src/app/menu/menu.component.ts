import { Component } from '@angular/core';
import { CartService } from '../cart.service'; // Import the CartService

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  foodItems = [
    { name: 'Burger', description: 'Delicious burger served fresh.', price: 30, image: 'assets/meat/images.jpeg' },
    { name: 'Burger with Chips', description: 'Burger served with crispy chips.', price: 40, image: 'assets/meat/download.jpeg' },
    { name: 'Wings', description: 'Flavorful wings cooked to perfection.', price: 25, image: 'assets/meat/images (1).jpeg' },
    // Add more items here...
  ];
item: any;

  constructor(private cartService: CartService) {} // Inject the CartService

  addToCart(item: any) {
    this.cartService.addToCart(item); // Add item to the cart using the CartService
    alert(`${item.name} added to cart!`);
  }
}
