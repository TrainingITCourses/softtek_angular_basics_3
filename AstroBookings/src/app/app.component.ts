import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lab-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <p>By Alberto Basalo</p>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  protected title = '🚀 Astro Bookings';
}
