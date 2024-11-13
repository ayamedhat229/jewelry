import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
isDarkMode=true;
hide:boolean = true;
constructor(private _authService:AuthService, private _Router:Router){

}
ngOnInit(): void {
  
}
loginForm = new FormGroup({
email : new FormControl('', [Validators.required,Validators.email]),
password : new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{5,12}$')])

})
onLogin(data:FormGroup){
  console.log(data)
  this._authService.onLoginUser(data.value).subscribe({
    next:(res)=>{
      console.log(res);
      localStorage.setItem('userToken',res.token);
      this._authService.getProfile()
      // this._Router.navigateByUrl('/landing-page/home')
    },
    error:(err)=>{
      console.log(err)
    },
    complete:()=>{
      this._Router.navigate(['/landing-page/home'])   
     }
  })
}
onToggle(){
  this._authService.toggleDarkMode()
}

}

