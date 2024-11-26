import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <h2>🔐 Login</h2>
    <a routerLink="../register">🔏 Register if don´t have an account</a>
  `,
})
export default class LoginPage {}
