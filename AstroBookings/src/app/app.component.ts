import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@layout/footer/footer.component';
import { HeaderComponent } from '@layout/header/header.component';

@Component({
  selector: 'lab-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <lab-header></lab-header>
    <h1>Welcome to {{ title }}!</h1>
    <lab-footer></lab-footer>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = '🚀 Astro Bookings';
}
