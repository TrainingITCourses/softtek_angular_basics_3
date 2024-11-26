import {
  Component,
  computed,
  input,
  InputSignal,
  signal,
  WritableSignal,
} from '@angular/core';
import { Author } from './author.type';

@Component({
  selector: 'lab-footer',
  imports: [],
  template: `
    <footer>
      <p>
        {{ footerTitle() }} By
        <a [href]="author.url" target="_blank">{{ author.name }}</a>
        {{ version }} ©️ {{ year }}
      </p>
      <p>
        @if(cookiesAccepted()){
        <span>🍪 Cookies accepted</span>
        } @else{
        <button class="outline" (click)="acceptCookies()">
          Accept cookies
        </button>
        }
      </p>
    </footer>
  `,
  styles: `
      footer {
        position: fixed;
        bottom: 0;
      }
  `,
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

  protected cookiesAccepted: WritableSignal<boolean> = signal<boolean>(false);

  protected footerTitle = computed(() => this.appName().toUpperCase());

  protected acceptCookies() {
    // this.cookiesAccepted.set(true);
    this.cookiesAccepted.update((s) => !s);
    //this.footerTitle.set('Cookies accepted');
    console.log('Cookies accepted');
  }
}
