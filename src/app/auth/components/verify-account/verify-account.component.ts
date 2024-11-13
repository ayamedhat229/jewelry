import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss']
})
export class VerifyAccountComponent implements OnInit{

  constructor(private _authService:AuthService,  public dialogRef: MatDialogRef<VerifyAccountComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){}
  // userName = localStorage.getItem('userName');
  ngOnInit(): void {
    
  }

onVerifyForm = new FormGroup({
  email : new FormControl('',[Validators.required]),
  code : new FormControl('',[Validators.required])
})
onVerify(data:any){
  this._authService.onVerifyAccount(data.value).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(err)=>{
      console.log(err)
    },
    complete:()=>{

    }
  })
}
onNoClick(): void {
  this.dialogRef.close();
}
}
