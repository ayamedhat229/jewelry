import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VerifyAccountComponent } from '../verify-account/verify-account.component';
import {MatButtonModule} from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;
  constructor(private _authService:AuthService, private _Router:Router, public dialog: MatDialog){}
  isDarkMode = true ;
  hide:boolean = true;
  hidden:boolean = true;
  ngOnInit(): void {
    
  }
  registerForm = new FormGroup({
    userName: new FormControl('',[Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
    country: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber : new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{5,12}$')]),
    confirmPassword: new FormControl('', [Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{5,12}$')])
  })
  onSubmit(data:FormGroup){
    this._authService.onRegister(data.value).subscribe({
      next:(res)=>{
        console.log(res);
      },

      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
       this.openDialog()
      }
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(VerifyAccountComponent, {
      data: {},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      if(result){
        // this.verifyAccount(result)
      }
    });
  }
  onToggle(){
    this._authService.toggleDarkMode()
  }
}
 

