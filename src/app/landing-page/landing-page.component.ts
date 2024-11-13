import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  title = 'jewelry';
  isDarkMode = false; // Initial state for dark mode
  showNavbar:boolean = false;
  constructor(private router: Router) {
    
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
     
        const currentRoute = this.router.url;
        this.showNavbar = !currentRoute.startsWith('/auth');
      }
    });
  }



 
  ngOnInit(): void {
    const darkMode = localStorage.getItem('darkMode');
    this.isDarkMode = darkMode === 'true';
    this.applyDarkMode();
    initFlowbite();
  }
  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
    this.applyDarkMode();
  }

  applyDarkMode(): void {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
