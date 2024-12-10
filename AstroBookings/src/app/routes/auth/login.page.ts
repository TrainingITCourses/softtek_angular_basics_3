import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { LoginDto, NULL_LOGIN_DTO } from '@app/shared/models/login.dto';
import { NULL_USER_TOKEN } from '@app/shared/models/user-token.dto';
import { AuthStore } from '@app/shared/services/auth.store';
import { PageHeaderComponent } from '@app/shared/ui/page-header.component';
import { AuthRepository } from './auth.repository';
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
  private readonly authRepository = inject(AuthRepository);
  private readonly authStore = inject(AuthStore);
  private readonly loginDto: WritableSignal<LoginDto> =
    signal<LoginDto>(NULL_LOGIN_DTO);

  private readonly loginResource = rxResource({
    request: () => this.loginDto(),
    loader: (param) => this.authRepository.postLogin$(param.request),
  });

  private readonly storeEffect = effect(() => {
    const userToken = this.loginResource.value();
    if (!userToken || userToken === NULL_USER_TOKEN)
      this.authStore.dispatchLogout();
    else this.authStore.dispatchLogin(userToken);
  });

  protected login(loginDto: LoginDto) {
    console.log(loginDto);
    this.loginDto.set(loginDto);
  }
}
