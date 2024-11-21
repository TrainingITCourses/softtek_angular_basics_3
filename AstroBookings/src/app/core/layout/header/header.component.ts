import { Component } from '@angular/core';

@Component({
  selector: 'lab-header',
  imports: [],
  template: ` <header>{{ title }}</header> `,
  styles: ``,
})
export class HeaderComponent {
  protected title = '🚀 Astro Bookings';
}
