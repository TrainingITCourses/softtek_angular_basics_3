import { Injectable } from '@angular/core';
import { ROCKETS } from '../data/rockets.data';
import { NULL_ROCKET, RocketDto } from '../models/rocket.dto';

@Injectable({
  providedIn: 'root',
})
export class RocketsService {
  loadRocketById(id: string): RocketDto {
    return ROCKETS.find((rocket) => rocket.id === id) || NULL_ROCKET;
  }
}
