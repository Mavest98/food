import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {

  // Define products array
  products: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // Example data
    this.products = [
      { id: 1, name: 'Pizza', price: 10.00, stock: 20 },
      { id: 2, name: 'Burger', price: 5.00, stock: 50 }
    ];
  }

  // Update status method
  updateStatus(productId: number, newPrice: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.price = newPrice;
    }
  }
}
