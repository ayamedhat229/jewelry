import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurProductsComponent } from './components/our-products/our-products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShopsComponent } from './components/shops/shops.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [{ path: '', redirectTo:'landing-page',pathMatch:"full"},
  {path:'landing-page',component:LandingPageComponent},
  {path:'home',component:HomeComponent},
  {path :'about-us',component:AboutUsComponent},
  {path:'our-products',component:OurProductsComponent},
  {path:'shops',component:ShopsComponent},
  {path:'contact-us',component:ContactUsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
