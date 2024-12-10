import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginDto, NULL_LOGIN_DTO } from '@app/shared/models/login.dto';
import {
  NULL_REGISTER_DTO,
  RegisterDto,
} from '@app/shared/models/register.dto';
import {
  NULL_USER_TOKEN,
  UserTokenDto,
} from '@app/shared/models/user-token.dto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly httpClient: HttpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api';

  login$(loginDto: LoginDto): Observable<UserTokenDto> {
    if (loginDto === NULL_LOGIN_DTO) return of(NULL_USER_TOKEN);
    return this.httpClient.post<UserTokenDto>(`${this.apiUrl}/login`, loginDto);
  }

  register$(registerDto: RegisterDto): Observable<UserTokenDto> {
    if (registerDto === NULL_REGISTER_DTO) return of(NULL_USER_TOKEN);
    return this.httpClient.post<UserTokenDto>(
      `${this.apiUrl}/register`,
      registerDto
    );
  }
}
