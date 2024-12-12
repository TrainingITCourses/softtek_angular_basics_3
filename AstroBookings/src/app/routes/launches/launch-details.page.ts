import { CurrencyPipe, DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  InputSignal,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { LaunchDto, NULL_LAUNCH } from '@app/shared/models/launch.dto';
import { NULL_ROCKET, RocketDto } from '@app/shared/models/rocket.dto';
import { AuthStore } from '@app/shared/services/auth.store';
import { LaunchesService } from '@app/shared/services/launches.service';
import { RocketsService } from '@app/shared/services/rockets.service';
import { PageHeaderComponent } from '@app/shared/ui/page-header.component';
import { BookSeatsForm } from './book-seats.form';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, CurrencyPipe, PageHeaderComponent, BookSeatsForm],
  template: `
    <article>
      <lab-page-header [title]="title()" [subtitle]="subtitle()" />
      <main>
        <p>
          <strong>Rocket:</strong> {{ rocket().name }} ({{ rocket().capacity }}
          seats)
        </p>
        <p><strong>Destination:</strong> {{ launch().destination }}</p>
        <p><strong>Date:</strong> {{ launch().date | date : 'medium' }}</p>
        <p>
          <strong>Price per seat:</strong>
          {{ launch().pricePerSeat | currency }}
        </p>
      </main>
      @defer( when isAuthenticated()){
      <lab-book-seats-form
        [launch]="launch()"
        [rocket]="rocket()"
        [(seats)]="bookSeats"
        (bookNow)="sendBooking()"
      />
      }
    </article>
  `,
})
export default class LaunchDetailsPage {
  private readonly launchesService: LaunchesService = inject(LaunchesService);
  private readonly rocketsService: RocketsService = inject(RocketsService);
  private readonly authStore: AuthStore = inject(AuthStore);

  public readonly id: InputSignal<string> = input.required<string>();

  protected readonly title: Signal<string> = computed(
    () => '🚀 ' + this.launch().mission
  );

  protected readonly subtitle: Signal<string> = computed(
    () => 'launch-details for: ' + this.id()
  );

  protected readonly launch: Signal<LaunchDto> = computed(
    () => this.launchResource.value() || NULL_LAUNCH
  );

  private readonly launchResource = rxResource({
    request: () => this.id(),
    loader: (param) => this.launchesService.loadLaunchesById$(param.request),
  });

  protected readonly rocketResource = rxResource({
    request: () => this.launch().rocketId,
    loader: (param) =>
      this.rocketsService.loadRocketById$(param.request) || NULL_ROCKET,
  });

  protected readonly rocket: Signal<RocketDto> = computed(
    () => this.rocketResource.value() || NULL_ROCKET
  );

  protected readonly isAuthenticated: Signal<boolean> =
    this.authStore.selectIsAuthenticated;

  protected readonly bookSeats: WritableSignal<number> = signal<number>(0);

  protected sendBooking() {
    console.log('Booking seats:', this.bookSeats());
  }
}
