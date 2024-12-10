import {
  computed,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { NULL_USER_TOKEN, UserTokenDto } from '../models/user-token.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  private readonly authState: WritableSignal<UserTokenDto> =
    signal<UserTokenDto>(NULL_USER_TOKEN);

  public readonly selectToken: Signal<string> = computed(
    () => this.authState().accessToken
  );

  public readonly selectIsAuthenticated: Signal<boolean> = computed(
    () => this.selectToken() !== ''
  );

  public dispatchLogin(userToken: UserTokenDto) {
    this.authState.set(userToken);
  }
  public dispatchLogout() {
    this.authState.set(NULL_USER_TOKEN);
  }

  public dispatchRefreshToken(accessToken: string) {
    this.authState.update((state) => ({ ...state, accessToken }));
  }

  //public dispatchRefreshToken(accessToken: string) {
  // this.authState.update((state) => {
  //   // state.accessToken = accessToken;
  //   // return state;
  //   //const newState = { ...state, accessToken };
  //   return { ...state, accessToken };
  // });
  //}
}
