import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit{
  constructor(private _authService:AuthService, private _Router:Router){}
  isDarkMode=true;
  ngOnInit(): void {
    
  }
forgetPasswordForm = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email])
})
onResetPassword(data:FormGroup){
  this._authService.onForgetPassword(data.value).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(err)=>{
      console.log(err)
    },
    complete:()=>{
      this._Router.navigateByUrl('/auth/reset-password')
    }
  })
}
onToggle(){
  this._authService.toggleDarkMode()
}

}
