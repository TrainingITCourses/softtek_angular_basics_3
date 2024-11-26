import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@layout/footer/footer.component';
import { HeaderComponent } from '@layout/header/header.component';

@Component({
  selector: 'lab-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <lab-header [title]="title" />
    <router-outlet />
    <lab-footer [appName]="title" />
  `,
  styles: [],
})
export class AppComponent {
  protected readonly title: string = '🚀 Astro Bookings 🎟️';
}
