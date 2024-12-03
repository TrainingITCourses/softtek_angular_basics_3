import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  InputSignal,
  model,
  ModelSignal,
  output,
  OutputEmitterRef,
  signal,
  Signal,
  viewChild,
  WritableSignal,
} from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RegisterDto } from '@app/shared/models/register.dto';
import { FormsService } from '@app/shared/services/forms.service';

@Component({
  selector: 'lab-register-form',
  imports: [FormsModule],
  template: `
    <form #f="ngForm">
      <fieldset>
        <section>
          <label for="username">User name</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="User name"
            [(ngModel)]="username"
            #usernameModel="ngModel"
            required
            minlength="3"
            [attr.aria-invalid]="modelInvalid(usernameModel)"
          />
          @if(modelInvalid(usernameModel)){
          <small>User name must be at least 3 characters long</small>
          }
        </section>
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
            [attr.aria-invalid]="modelInvalid(emailModel)"
          />
          @if(modelInvalid(emailModel)){
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
            [attr.aria-invalid]="modelInvalid(passwordModel)"
          />
          @if(modelInvalid(passwordModel)){
          <small>Password must be at least 4 characters long</small>
          }
        </section>
        <section>
          <label for="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            [(ngModel)]="confirmPassword"
            #confirmPasswordModel="ngModel"
            [attr.aria-invalid]="modelInvalid(confirmPasswordModel)"
          />
        </section>
      </fieldset>
      <button type="submit" [disabled]="f.invalid" (click)="submit()">
        {{ submitCaption() }}
      </button>
    </form>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterForm {
  private readonly formsService: FormsService = inject(FormsService);
  public readonly submitCaption: InputSignal<string> = input('Register');
  public readonly register: OutputEmitterRef<RegisterDto> =
    output<RegisterDto>();

  public username: ModelSignal<string> = model('');
  protected email: WritableSignal<string> = signal('');
  protected password: WritableSignal<string> = signal('');
  protected confirmPassword: WritableSignal<string> = signal('');

  protected modelInvalid(model: NgModel): boolean | undefined {
    return this.formsService.modelInvalid(model);
  }

  protected confirmPasswordModel = viewChild<NgModel>('confirmPasswordModel');

  private passwordsMatches: Signal<boolean> = computed(
    () => this.password() === this.confirmPassword()
  );

  private passwordValidationEffect = effect(() => {
    const model = this.confirmPasswordModel();
    if (!model) return;
    const control = model.control;
    if (this.passwordsMatches()) {
      control.setErrors(null);
    } else {
      control.setErrors({ passwordMismatch: true });
    }
  });

  private logPasswordMatchesEffect = effect(() => {
    console.log('passwordsMatches', this.passwordsMatches());
  });

  protected submit(): void {
    console.log(
      'Register: ' +
        this.username() +
        ' - ' +
        this.email() +
        ' - ' +
        this.password()
    );
    const registerDto: RegisterDto = {
      username: this.username(),
      email: this.email(),
      password: this.password(),
    };
    this.register.emit(registerDto);
  }
}
