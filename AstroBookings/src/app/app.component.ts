import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderWidget } from '@app/core/layout/header/header.widget';
import { FooterComponent } from '@layout/footer/footer.component';

@Component({
  selector: 'lab-root',
  imports: [RouterOutlet, HeaderWidget, FooterComponent],
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
