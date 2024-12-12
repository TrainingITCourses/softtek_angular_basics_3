import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Signal,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RocketDto } from '@app/shared/models/rocket.dto';
import { RocketsService } from '@app/shared/services/rockets.service';
import { ListRocketsComponent } from './list-rockets.component';

@Component({
  selector: 'lab-rockets',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ListRocketsComponent],
  template: `
    <h2>List of {{ rocketsCount() }} rockets</h2>
    @defer( when rocketsCount() > 0){
    <lab-list-rockets [rockets]="rockets()" />
    }@placeholder {
    <p>Loading...</p>
    }
    <p>{{ error() }}</p>
  `,
})
export default class RocketsPage {
  private readonly rocketsService = inject(RocketsService);

  private readonly rocketsResource = rxResource({
    loader: () => this.rocketsService.loadRockets$(),
  });

  protected readonly rockets: Signal<RocketDto[]> = computed(
    () => this.rocketsResource.value() || []
  );

  protected readonly rocketsCount: Signal<number> = computed(
    () => this.rockets().length
  );

  protected readonly error: Signal<string | undefined> = computed(() => {
    const error = this.rocketsResource.error();
    if (!error) return undefined;
    return (error as any).message;
  });
}
