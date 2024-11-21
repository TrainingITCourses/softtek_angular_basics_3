import { Component } from '@angular/core';

@Component({
  selector: 'lab-footer',
  imports: [],
  template: `
    <footer>
      <p>By {{ author }} {{ version }}</p>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {
  protected author: string = '@AlbertoBasalo';
  protected version: string = 'V19';
}
