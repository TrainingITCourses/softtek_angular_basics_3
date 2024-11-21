import { Component, input, InputSignal } from '@angular/core';
import { Author } from './author.type';

@Component({
  selector: 'lab-footer',
  imports: [],
  template: `
    <footer>
      <p>
        {{ appName() }} By
        <a [href]="author.url" target="_blank">{{ author.name }}</a>
        {{ version }} ©️ {{ year }}
      </p>
      <p>
        @if(cookiesAccepted){
        <span>🍪 Cookies accepted</span>
        } @else{
        <button (click)="acceptCookies()">Accept cookies</button>
        }
      </p>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {
  /**
   * App name
   * - It must be a `string`
   */
  public readonly appName: InputSignal<string> = input<string>('Initial value');

  protected author: Author = {
    name: 'Alberto Basalo',
    url: 'https://albertobasalo.dev',
  };
  protected year: number = new Date().getFullYear();
  protected version: string = 'V19';
  protected cookiesAccepted: boolean = false;

  protected acceptCookies() {
    this.cookiesAccepted = true;
    console.log('Cookies accepted');
  }
}
