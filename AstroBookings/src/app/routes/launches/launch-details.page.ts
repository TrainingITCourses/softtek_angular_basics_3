import { CurrencyPipe, DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  InputSignal,
  Signal,
} from '@angular/core';
import { LaunchDto } from '@app/shared/models/launch.dto';
import { NULL_ROCKET, RocketDto } from '@app/shared/models/rocket.dto';
import { LaunchesService } from '@app/shared/services/launches.service';
import { RocketsService } from '@app/shared/services/rockets.service';
import { PageHeaderComponent } from '@app/shared/ui/page-header.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, CurrencyPipe, PageHeaderComponent],
  template: `
    <article>
      <lab-page-header [title]="title()" [subtitle]="subtitle()" />
      <main>
        <p>
          <strong>Rocket:</strong> {{ rocket().name }} ({{ rocket().capacity }}
          seats)
        </p>
        <p><strong>Destination:</strong> {{ launch().destination }}</p>
        @if(!nullDate()){
        <p><strong>Date:</strong> {{ launch().date | date : 'medium' }}</p>
        }
        <p>
          <strong>Price per seat:</strong>
          {{ launch().pricePerSeat | currency }}
        </p>
      </main>
    </article>
  `,
})
export default class LaunchDetailsPage {
  private readonly launchesService: LaunchesService = inject(LaunchesService);
  private readonly rocketsService: RocketsService = inject(RocketsService);

  public readonly id: InputSignal<string> = input.required<string>();

  protected readonly title: Signal<string> = computed(
    () => '🚀 ' + this.launch().mission
  );

  protected readonly subtitle: Signal<string> = computed(
    () => 'launch-details for: ' + this.id()
  );

  protected readonly launch: Signal<LaunchDto> = computed(() =>
    this.launchesService.loadLaunchById(this.id())
  );

  protected readonly nullDate: Signal<boolean> = computed(
    () =>
      this.launch().date.toDateString() ===
      new Date(1, 1, 1, 0, 0, 0, 0).toDateString()
  );

  protected readonly rocket: Signal<RocketDto> = computed(() => {
    const rocketId = this.launch().rocketId;
    return this.rocketsService.loadRocketById(rocketId) || NULL_ROCKET;
  });
}
