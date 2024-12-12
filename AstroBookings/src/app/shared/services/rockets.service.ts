import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RocketDto } from '../models/rocket.dto';

@Injectable({
  providedIn: 'root',
})
export class RocketsService {
  private httpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api';
  private rocketsUrl = `${this.apiUrl}/rockets`;

  loadRocketById$(id: string): Observable<RocketDto> {
    return this.httpClient.get<RocketDto>(`${this.rocketsUrl}/${id}`);
  }
}
