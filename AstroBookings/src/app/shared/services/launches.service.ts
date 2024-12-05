import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LaunchDto } from '../models/launch.dto';

@Injectable({
  providedIn: 'root',
})
export class LaunchesService {
  private readonly httpClient: HttpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api';
  private launchesUrl = `${this.apiUrl}/launches`;

  loadLaunches$(): Observable<LaunchDto[]> {
    console.log('Loading launches from:', this.launchesUrl);
    return this.httpClient.get<LaunchDto[]>(this.launchesUrl);
  }

  loadLaunchesById$(id: string): Observable<LaunchDto> {
    return this.httpClient.get<LaunchDto>(`${this.launchesUrl}/${id}`);
  }
}
