import { UpperCasePipe } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'lab-header',
  imports: [UpperCasePipe],
  template: ` <header>{{ title() | uppercase }}</header> `,
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
