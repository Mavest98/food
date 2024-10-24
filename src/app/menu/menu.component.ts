import { Component } from '@angular/core';
import { CartService } from '../cart.service'; // Import the CartService

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  // Define your food items array with correct data structure
  foodItems = [
    { id: 1, name: 'Burger', description: 'Delicious burger served fresh.', price: 30, quantity: 1 },
    { id: 2, name: 'Burger with Chips', description: 'Burger served with crispy chips.', price: 40, quantity: 1 },
    { id: 3, name: 'Wings', description: 'Flavorful wings cooked to perfection.', price: 25, quantity: 1 },
    { id: 4, name: 'Combo Meal', description: 'Burger, fries, & 4 wings', price: 80, quantity: 1 },
    { id: 5, name: 'Hot Dog & Vienna', description: 'Vienna sausage', price: 10, quantity: 1 },
    { id: 6, name: 'Hot Dog & Sausage', description: 'Sausage', price: 15, quantity: 1 },
    { id: 7, name: 'Hot Dog & Fries', description: 'Hot dog served with fries', price: 25, quantity: 1 },

    // New items from your uploaded image
    { id: 9, name: 'Hungry Meal', description: 'Steak R50, Chicken R35, Wors R45', price: 50, quantity: 1 },
    { id: 10, name: 'Hungry and Angry Meal', description: 'Chicken and Wors R50, Steak and Wors R55', price: 55, quantity: 1 },
    { id: 11, name: 'Starving Meal', description: 'Steak, Wors, and Chicken R75', price: 75, quantity: 1 },
    { id: 12, name: 'Starch - Papa', description: 'Served with meals', price: 10, quantity: 1 },
    { id: 13, name: 'Sides - Salsa', description: 'Fresh salsa side', price: 10, quantity: 1 },
    { id: 14, name: 'Sides - Chakalaka', description: 'Spicy vegetable relish', price: 15, quantity: 1 }
  ];

  constructor(private cartService: CartService) {} // Inject CartService

  // Add item to cart using CartService
  addToCart(item: any) {
    this.cartService.addToCart(item); // Call CartService to add item to cart
    alert(`${item.name} added to cart!`);
  }
}
