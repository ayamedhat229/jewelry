import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
   scrollToComponent() {
    const HomeComponent = document.querySelector('.home-one'); 
    if (HomeComponent) {
        HomeComponent.scrollIntoView({ behavior: 'smooth' });
    }
}

}
