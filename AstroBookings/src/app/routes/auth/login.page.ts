import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginDto } from '@app/shared/models/login.dto';
import { PageHeaderComponent } from '@app/shared/ui/page-header.component';
import { LoginForm } from './login.form';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeaderComponent, LoginForm],
  template: `
    <article>
      <lab-page-header title="🔐 Login" />
      <lab-login-form (login)="login($event)" />
      <footer>
        <a routerLink="../register">🔏 Register if don´t have an account</a>
      </footer>
    </article>
  `,
})
export default class LoginPage {
  protected login(loginDto: LoginDto) {
    console.log(loginDto);
  }
}
