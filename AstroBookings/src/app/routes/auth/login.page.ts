import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <h2>🔐 Login</h2>
    <form>
      <fieldset>
        <section>
          <label for="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Email" />
        </section>
        <section>
          <label for="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
        </section>
      </fieldset>
      <button type="submit">Login</button>
    </form>
    <a routerLink="../register">🔏 Register if don´t have an account</a>
  `,
})
export default class LoginPage {}
