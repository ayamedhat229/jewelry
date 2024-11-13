import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // title = 'jewelry';
  // isDarkMode = false; // Initial state for dark mode
 showNavbar:boolean = false;
constructor(private router: Router) {
  
  // this.router.events.subscribe((event) => {
  //   if (event instanceof NavigationEnd) {
   
  //     const currentRoute = this.router.url;
  //     this.showNavbar = !currentRoute.startsWith('/auth');
  //   }
  // });
}
  ngOnInit(): void {
    // const darkMode = localStorage.getItem('darkMode');
    // this.isDarkMode = darkMode === 'true';
    // this.applyDarkMode();
    // initFlowbite();
  }

  // toggleDarkMode(): void {
  //   this.isDarkMode = !this.isDarkMode;
  //   localStorage.setItem('darkMode', this.isDarkMode.toString());
  //   this.applyDarkMode();
  // }

  // applyDarkMode(): void {
  //   if (this.isDarkMode) {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }

}
