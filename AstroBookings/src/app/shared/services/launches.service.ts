import { Injectable } from '@angular/core';
import { LAUNCHES } from '../data/launches.data';
import { LaunchDto, NULL_LAUNCH } from '../models/launch.dto';

@Injectable({
  providedIn: 'root',
})
export class LaunchesService {
  loadLaunches(): LaunchDto[] {
    return LAUNCHES;
  }

  loadLaunchById(id: string): LaunchDto {
    return LAUNCHES.find((launch) => launch.id === id) || NULL_LAUNCH;
  }
}
