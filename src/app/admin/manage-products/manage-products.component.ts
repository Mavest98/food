import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {

  products: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // Updated data for products
    this.products = [
      { id: 1, name: 'Burger', description: 'Delicious burger served fresh.', price: 30, quantity: 1 },
      { id: 2, name: 'Burger with Chips', description: 'Burger served with crispy chips.', price: 40, quantity: 1 },
      { id: 3, name: 'Wings', description: 'Flavorful wings cooked to perfection.', price: 25, quantity: 1 },
      { id: 4, name: 'Combo Meal', description: 'Burger, fries, & 4 wings', price: 80, quantity: 1 },
      { id: 5, name: 'Hot Dog & Vienna', description: 'Vienna', price: 10, quantity: 1 },
      { id: 6, name: 'Hot Dog & Sausage', description: 'Sausage', price: 15, quantity: 1 },
      { id: 7, name: 'Hot Dog & Fries', description: 'With Fries', price: 25, quantity: 1 }
    ];
  }


  updatePrice(productId: number, newPrice: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.price = newPrice;
      alert(`${product.name} price updated to $${newPrice}`);
    }
  }
}
