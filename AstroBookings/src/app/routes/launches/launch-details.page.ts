import { CurrencyPipe, DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  InputSignal,
  Signal,
} from '@angular/core';
import { LAUNCHES } from '@app/shared/data/launches.data';
import { ROCKETS } from '@app/shared/data/rockets.data';
import { LaunchDto, NULL_LAUNCH } from '@app/shared/models/launch.dto';
import { NULL_ROCKET, RocketDto } from '@app/shared/models/rocket.dto';
import { PageHeaderComponent } from '@app/shared/ui/page-header.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, CurrencyPipe, PageHeaderComponent],
  template: `
    <article>
      <lab-page-header
        [title]="launch().mission"
        subtitle=" launch-details for: {{ id() }}"
      />
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
  public readonly id: InputSignal<string> = input.required<string>();

  protected readonly launch: Signal<LaunchDto> = computed(() => {
    return LAUNCHES.find((launch) => launch.id === this.id()) || NULL_LAUNCH;
  });

  protected readonly nullDate: Signal<boolean> = computed(
    () =>
      this.launch().date.toDateString() ===
      new Date(1, 1, 1, 0, 0, 0, 0).toDateString()
  );

  protected readonly rocket: Signal<RocketDto> = computed(() => {
    const rocketId = this.launch().rocketId;
    return ROCKETS.find((rocket) => rocket.id === rocketId) || NULL_ROCKET;
  });
}
