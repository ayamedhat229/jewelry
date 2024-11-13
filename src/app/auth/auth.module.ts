import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { VerifyAccountComponent } from './components/verify-account/verify-account.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalInterceptor } from './Interceptor/global.interceptor';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    VerifyAccountComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule

  ],
  providers:[],
  exports:[
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent
  ]
})
export class AuthModule { }
