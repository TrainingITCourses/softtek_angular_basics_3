import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import {
  NULL_REGISTER_DTO,
  RegisterDto,
} from '@app/shared/models/register.dto';
import { PageHeaderComponent } from '@app/shared/ui/page-header.component';
import { AuthService } from './auth.service';
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
  private readonly authService = inject(AuthService);
  private registerDto: RegisterDto = NULL_REGISTER_DTO;

  private readonly registerResource = rxResource({
    loader: () => this.authService.register$(this.registerDto),
  });

  protected register(registerDto: RegisterDto) {
    console.log(registerDto);
    this.registerDto = registerDto;
    this.registerResource.reload();
  }
}
