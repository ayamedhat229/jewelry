import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  scrollToComponent() {
    const ContactUsComponent = document.querySelector('.contact-us'); 
    if (ContactUsComponent) {
        ContactUsComponent.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
