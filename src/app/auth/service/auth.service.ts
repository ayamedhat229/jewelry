import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isDarkMode = true;
  // private baseUrl = "https://upskilling-egypt.com:3003/api/v1";
  constructor(private _HttpClient:HttpClient, private _Router:Router) {
    if (localStorage.getItem('userToken')!==null){
      this.getProfile()
    }
   }
  getProfile(){
    let encoded :any = localStorage.getItem('userToken');
    let decoded :any = jwtDecode(encoded);
    localStorage.setItem('userName',decoded.userName)
    localStorage.setItem('userEmail',decoded.userEmail) 
  }
  onLoginUser(data:any):Observable<any>{
   return this._HttpClient.post("/Users/Login",data)
  }
  onRegister(data:any):Observable<any>{
    return this._HttpClient.post("/Users/Register",data)
  }
  onVerifyAccount(data:any):Observable<any>{
    return this._HttpClient.put("/Users/verify",data)
  }
  onForgetPassword(data:any):Observable<any>{
    return this._HttpClient.post('Users/Reset/Request',data)
  }
  onChangePassword(data:any):Observable<any>{
    return this._HttpClient.put("/Users/ChangePassword",data)
  }
  onResetPassword(data:any):Observable<any>{
    return this._HttpClient.post("/Users/Reset",data)
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  
  }
  onLogout(){
    localStorage.clear()
    this._Router.navigate(['/auth/login'])
  }
}
