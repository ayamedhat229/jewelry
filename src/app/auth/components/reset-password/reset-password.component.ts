import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit{
  hide :boolean = true;
  hidden :boolean = true;
  constructor(private _authService:AuthService, private _Router:Router){}
  ngOnInit(): void {
    
  }
onResetPassword = new FormGroup({
  email :  new FormControl('', [Validators.required, Validators.email]),
  password : new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{5,12}$')]),
  confirmPassword : new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{5,12}$')]),
  seed : new FormControl('', [Validators.required])
  
})
onSubmit(data:FormGroup){
  this._authService.onResetPassword(data.value).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(err)=>{
      console.log(err)
    },
    complete:()=>{
      this._Router.navigateByUrl('/auth/login')
    }
  })
}
}
