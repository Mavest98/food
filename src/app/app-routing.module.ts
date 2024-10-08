import { SpecialsComponent } from './specials/specials.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about',component: AboutComponent},
  {path: 'hero', component: HeroComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'newsletter', component: NewsletterComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'specials', component: SpecialsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
