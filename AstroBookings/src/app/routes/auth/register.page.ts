import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import {
  NULL_REGISTER_DTO,
  RegisterDto,
} from '@app/shared/models/register.dto';
import { NULL_USER_TOKEN } from '@app/shared/models/user-token.dto';
import { AuthStore } from '@app/shared/services/auth.store';
import { PageHeaderComponent } from '@app/shared/ui/page-header.component';
import { AuthRepository } from './auth.repository';
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
  private readonly authService = inject(AuthRepository);
  private readonly authStore = inject(AuthStore);
  private registerDto: RegisterDto = NULL_REGISTER_DTO;

  private readonly registerResource = rxResource({
    loader: () => this.authService.postRegister$(this.registerDto),
  });

  private readonly storeEffect = effect(() => {
    const userToken = this.registerResource.value();
    if (!userToken || userToken === NULL_USER_TOKEN)
      this.authStore.dispatchLogout();
    else this.authStore.dispatchLogin(userToken);
  });

  protected register(registerDto: RegisterDto) {
    console.log(registerDto);
    this.registerDto = registerDto;
    this.registerResource.reload();
  }
}
