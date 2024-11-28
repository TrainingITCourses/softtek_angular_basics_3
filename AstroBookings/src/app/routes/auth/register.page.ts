import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  Signal,
  signal,
  viewChild,
  WritableSignal,
} from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, FormsModule],
  template: `
    <h2>🔏 Register</h2>
    <form #f="ngForm">
      <fieldset>
        <section>
          <label for="username">User name</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="User name"
            [(ngModel)]="username"
            #usernameModel="ngModel"
            required
            minlength="3"
            [attr.aria-invalid]="modelInvalid(usernameModel)"
          />
          @if(modelInvalid(usernameModel)){
          <small>User name must be at least 3 characters long</small>
          }
        </section>
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
            [attr.aria-invalid]="modelInvalid(emailModel)"
          />
          @if(modelInvalid(emailModel)){
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
            [attr.aria-invalid]="modelInvalid(passwordModel)"
          />
          @if(modelInvalid(passwordModel)){
          <small>Password must be at least 4 characters long</small>
          }
        </section>
        <section>
          <label for="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            [(ngModel)]="confirmPassword"
            #confirmPasswordModel="ngModel"
            [attr.aria-invalid]="modelInvalid(confirmPasswordModel)"
          />
        </section>
      </fieldset>
      <button type="submit" [disabled]="f.invalid" (click)="register()">
        Register
      </button>
    </form>
    <a routerLink="../login"> 🔐 Login if already have an account</a>
  `,
})
export default class RegisterPage {
  protected username: WritableSignal<string> = signal('');
  protected email: WritableSignal<string> = signal('');
  protected password: WritableSignal<string> = signal('');
  protected confirmPassword: WritableSignal<string> = signal('');

  protected modelInvalid(model: NgModel): boolean | undefined {
    if (!model.touched) return undefined;
    return model.invalid === true;
  }

  protected confirmPasswordModel = viewChild<NgModel>('confirmPasswordModel');

  private passwordsMatches: Signal<boolean> = computed(
    () => this.password() === this.confirmPassword()
  );

  private passwordValidationEffect = effect(() => {
    const model = this.confirmPasswordModel();
    if (!model) return;
    const control = model.control;
    if (this.passwordsMatches()) {
      control.setErrors(null);
    } else {
      control.setErrors({ passwordMismatch: true });
    }
  });

  protected register(): void {
    console.log(
      'Register: ' +
        this.username() +
        ' - ' +
        this.email() +
        ' - ' +
        this.password()
    );
  }
}
