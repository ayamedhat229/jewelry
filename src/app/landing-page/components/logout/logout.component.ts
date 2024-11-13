import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit{
  constructor(private _authService:AuthService){}
  ngOnInit(): void {
    
  }
  logout(){
    this._authService.onLogout()
  }
}
