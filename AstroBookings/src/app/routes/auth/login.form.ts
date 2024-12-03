import {
  ChangeDetectionStrategy,
  Component,
  inject,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { LoginDto } from '@app/shared/models/login.dto';
import { FormsService } from '@app/shared/services/forms.service';

@Component({
  selector: 'lab-login-form',
  imports: [FormsModule],
  template: `
    <form #f="ngForm">
      <fieldset>
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
            [attr.aria-invalid]="emailModel.invalid"
          />
          @if(emailModel.invalid){
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
            aria-invalid="false"
            [attr.aria-invalid]="modelInvalid(passwordModel)"
          />
          @if(modelInvalid(passwordModel)){
          <small>Password must be at least 4 characters long</small>
          }
        </section>
      </fieldset>
      <button type="submit" [disabled]="f.invalid" (click)="submit()">
        Login
      </button>
    </form>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginForm {
  private readonly formsService: FormsService = inject(FormsService);
  public readonly login: OutputEmitterRef<LoginDto> = output<LoginDto>();

  protected email: string = 'a@b.c';
  protected password: string = '';

  protected modelInvalid(model: NgModel): boolean | undefined {
    return this.formsService.modelInvalid(model);
  }

  protected submit(): void {
    console.log('submit', this.email, this.password);
    const loginDto: LoginDto = {
      email: this.email,
      password: this.password,
    };
    this.login.emit(loginDto);
  }
}
