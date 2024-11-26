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
          {{
            title() | uppercase
          }}
        </ul>
        <ul>
          <a routerLink="/">🏠 Home</a>
          <a routerLink="/about">ℹ️ About</a>
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
