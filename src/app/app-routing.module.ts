import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './landing-page/components/navbar/navbar.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'}
  ,{ path: 'landing-page', canActivate:[AuthGuard], loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)}, 
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
