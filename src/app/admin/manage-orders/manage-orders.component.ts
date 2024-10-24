import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html'
})
export class ManageOrdersComponent implements OnInit {
  orders: any[] = [];  // Fetch this from backend or mock data

  constructor() {}

  ngOnInit(): void {
    // Load orders from API or mock
    this.orders = [
      { id: 1, name: 'Order 1', status: 'Pending' },
      { id: 2, name: 'Order 2', status: 'Delivered' }
    ];
  }

  updateStatus(order: any, status: string) {
    order.status = status;
  }
}
