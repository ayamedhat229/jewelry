import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './landing-page/components/navbar/navbar.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalInterceptor } from './auth/Interceptor/global.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    AuthModule,
    BrowserAnimationsModule,


  ],
  exports:[

  ],
 providers:[
  {
    provide:HTTP_INTERCEPTORS,
    useClass: GlobalInterceptor,
    multi: true
  }
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
