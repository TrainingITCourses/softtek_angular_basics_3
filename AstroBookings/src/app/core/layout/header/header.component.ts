import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lab-header',
  imports: [UpperCasePipe],
  template: ` <header>{{ title | uppercase }}</header> `,
  styles: ``,
})
export class HeaderComponent {
  protected title = '🚀 Astro Bookings';
}
