import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurProductsComponent } from './components/our-products/our-products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShopsComponent } from './components/shops/shops.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DetailsComponent } from './components/details/details.component';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { LogoutComponent } from './components/logout/logout.component';
@NgModule({
  declarations: [
    LandingPageComponent,
    HomeComponent,
    AboutUsComponent,
    OurProductsComponent,
    NavbarComponent,
    FooterComponent,
    ShopsComponent,
    ContactUsComponent,
    DetailsComponent,
    LogoutComponent,

  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule

  ],
  providers: [],
  exports: [
    NavbarComponent,
    FooterComponent,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class LandingPageModule {}
