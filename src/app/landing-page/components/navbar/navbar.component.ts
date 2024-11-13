import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';
import { LogoutComponent } from '../logout/logout.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  isDarkMode = true ;
  constructor(private _authService:AuthService, public dialog: MatDialog){}


 ngOnInit(): void {
   
 }
onToggle(){
  this._authService.toggleDarkMode()


}
openLogout(enterAnimationDuration: string, exitAnimationDuration: string): void {
  this.dialog.open(LogoutComponent, {
    width: '400px',
    enterAnimationDuration,
    exitAnimationDuration,
  });
}

}
