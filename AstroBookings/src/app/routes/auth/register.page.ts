import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <h2>🔏 Register</h2>
    <form>
      <fieldset>
        <section>
          <label for="username">User name</label>
          <input id="username" type="text" placeholder="User name" />
        </section>
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
        <section>
          <label for="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />
        </section>
      </fieldset>
      <button type="submit">Register</button>
    </form>
    <a routerLink="../login"> 🔐 Login if already have an account</a>
  `,
})
export default class RegisterPage {}
