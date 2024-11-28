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
          <label>User name</label>
          <input type="text" placeholder="User name" />
        </section>
        <section>
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </section>
        <section>
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </section>
        <section>
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Password" />
        </section>
      </fieldset>
      <button type="submit">Register</button>
    </form>
    <a routerLink="../login"> 🔐 Login if already have an account</a>
  `,
})
export default class RegisterPage {}
