import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@layout/footer/footer.component';
import { HeaderComponent } from '@layout/header/header.component';
import { LaunchDto } from './shared/models/launch.dto';

@Component({
  selector: 'lab-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, JsonPipe],
  template: `
    <lab-header [title]="title"></lab-header>
    <h1>Welcome to {{ title }}!</h1>
    <pre>{{ launch | json }}</pre>

    <lab-footer [appName]="title"></lab-footer>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = '🚀 Astro Bookings 🎟️';
  launch: LaunchDto = {
    id: '1',
    agencyId: '1',
    rocketId: '1',
    date: new Date(2029, 5, 1),
    mission: 'Moon Landing',
    destination: 'Moon',
    pricePerSeat: 100,
    status: 'scheduled',
  };
}
