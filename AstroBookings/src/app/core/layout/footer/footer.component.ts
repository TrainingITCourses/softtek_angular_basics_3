import { Component } from '@angular/core';

@Component({
  selector: 'lab-footer',
  imports: [],
  template: `
    <footer>
      <p>
        By <a [href]="author.url" target="_blank">{{ author.name }}</a>
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
  protected author = {
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
