import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  cartItemCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.items$.subscribe((items: CartItem[]) => {
      this.cartItemCount = items.reduce((count, item) => count + item.quantity, 0);
    });
  }
}
