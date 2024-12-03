import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegisterDto } from '@app/shared/models/register.dto';
import { PageHeaderComponent } from '@app/shared/ui/page-header.component';
import { RegisterForm } from './register.form';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeaderComponent, RegisterForm],
  template: `
    <article>
      <lab-page-header title="🔏 Register" />
      <lab-register-form
        username="Alberto"
        submitCaption="Register new user"
        (register)="register($event)"
      />
      <footer>
        <a routerLink="../login"> 🔐 Login if already have an account</a>
      </footer>
    </article>
  `,
})
export default class RegisterPage {
  protected register(registerDto: RegisterDto) {
    console.log(registerDto);
  }
}
