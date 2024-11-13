import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit{
  constructor(private _authService:AuthService, private _Router:Router){

  }
  changePasswordForm = new FormGroup({
    oldPassword : new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{5,12}$')]),
    newPassword : new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{5,12}$')]),
    confirmNewPassword : new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{5,12}$')]),
  })
  onSubmit(data:FormGroup){
    this._authService.onChangePassword(data.value).subscribe({
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
  ngOnInit(): void {
    
  }

}
