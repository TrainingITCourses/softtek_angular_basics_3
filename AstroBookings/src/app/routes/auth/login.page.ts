import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, FormsModule],

  template: `
    <h2>🔐 Login</h2>
    <form #f="ngForm">
      <fieldset>
        <section>
          <label for="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            [(ngModel)]="email"
            #emailModel="ngModel"
            required
            email
            [attr.aria-invalid]="emailModel.invalid"
          />
          @if(emailModel.invalid){
          <small>Invalid email</small>
          }
        </section>
        <section>
          <label for="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            [(ngModel)]="password"
            #passwordModel="ngModel"
            required
            minlength="4"
            aria-invalid="false"
            [attr.aria-invalid]="passwordModel.invalid"
          />
          @if(passwordModel.invalid){
          <small>Password must be at least 4 characters long</small>
          }
        </section>
      </fieldset>
      <button type="submit" [disabled]="f.invalid" (click)="login()">
        Login
      </button>
    </form>
    <a routerLink="../register">🔏 Register if don´t have an account</a>
  `,
})
export default class LoginPage {
  protected email: string = 'a@b.c';
  protected password: string = '';

  protected login(): void {
    console.log('Login', this.email + ' - ' + this.password);
  }
}
