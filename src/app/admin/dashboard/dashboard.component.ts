// dashboard.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <h2>Admin Dashboard</h2>
    <router-outlet></router-outlet>
  `
})
export class DashboardComponent {}
