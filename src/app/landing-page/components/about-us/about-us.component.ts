import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  scrollToComponent() {
    const AboutUsComponent = document.querySelector('.about-one'); 
    if (AboutUsComponent) {
        AboutUsComponent.scrollIntoView({ behavior: 'smooth' });
    }
}
}
