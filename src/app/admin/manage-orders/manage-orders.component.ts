import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html'
})
export class ManageOrdersComponent implements OnInit {
  orders: any[] = [];  // Ideally, fetch this from a service in the future

  constructor() {}

  ngOnInit(): void {
    // Example orders data (could be replaced with an API call later)
    this.orders = [
      { id: 1, name: 'Order 1', status: 'Pending' },
      { id: 2, name: 'Order 2', status: 'Delivered' }
    ];
  }

  updateStatus(order: any, status: string) {
    order.status = status;
    alert(`${order.name} is now marked as ${status}`);
    // You can also call a service to update the order status in the backend
  }
}
