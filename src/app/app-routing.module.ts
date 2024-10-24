import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Existing components
import { SpecialsComponent } from './specials/specials.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

// Admin components
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ManageOrdersComponent } from './admin/manage-orders/manage-orders.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';

// Admin Guard for protecting admin routes
import { AuthGuard } from './auth.guard';  // Assuming you have a guard to protect routes

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'specials', component: SpecialsComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  {path: 'admin/manage-orders',component: ManageOrdersComponent},
  { path: 'admin/orders', component: ManageOrdersComponent },
  { path: 'admin/products', component: ManageProductsComponent },






  // Admin routes
  { path: 'admin', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'admin/orders', component: ManageOrdersComponent, canActivate: [AuthGuard] },
  { path: 'admin/products', component: ManageProductsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
