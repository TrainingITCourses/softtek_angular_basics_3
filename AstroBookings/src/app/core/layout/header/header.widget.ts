import { UpperCasePipe } from '@angular/common';
import { Component, inject, input, InputSignal, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthStore } from '@app/shared/services/auth.store';

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
          @if(isAuthenticated()){
          <li><a routerLink="/">🎟️ My Bookings</a></li>
          <li (click)="logout()">👤 Log out</li>
          } @else{
          <li><a routerLink="/auth/login">🔒 Login</a></li>
          }
        </ul>
      </nav>
    </header>
  `,
  styles: ``,
})
export class HeaderWidget {
  private readonly authStore = inject(AuthStore);

  /**
   * Application title
   * @requires title must be a `string`
   * @throws an error if the value is not provided
   */
  public readonly title: InputSignal<string> = input.required<string>();

  protected isAuthenticated: Signal<boolean> =
    this.authStore.selectIsAuthenticated;

  protected logout() {
    this.authStore.dispatchLogout();
  }
}
