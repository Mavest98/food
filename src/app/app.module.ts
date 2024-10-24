import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { SpecialsComponent } from './specials/specials.component';
import { AboutComponent } from './about/about.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ManageOrdersComponent } from './admin/manage-orders/manage-orders.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ContactComponent,
    HeroComponent,
    ServicesComponent,
    SpecialsComponent,
    AboutComponent,
    NewsletterComponent,
    FooterComponent,
    NavbarComponent,
    OrderComponent,
    CartComponent,
    DashboardComponent,
    ManageOrdersComponent,
    ManageProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
