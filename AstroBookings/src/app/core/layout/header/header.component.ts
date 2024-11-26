import { UpperCasePipe } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lab-header',
  imports: [UpperCasePipe, RouterLink],
  template: `
    <header>
      <nav>
        <ul>
          <li>{{ title() | uppercase }}</li>
        </ul>
        <ul>
          <li><a routerLink="/">🏠 Home</a></li>
          <li><a routerLink="/about">ℹ️ About</a></li>
          <li><a routerLink="/auth/login">🔒 Login</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {
  /**
   * Application title
   * @requires title must be a `string`
   * @throws an error if the value is not provided
   */
  public readonly title: InputSignal<string> = input.required<string>();
}
