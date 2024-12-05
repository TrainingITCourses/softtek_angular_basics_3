import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  ResourceStatus,
  Signal,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { LaunchDto } from '@app/shared/models/launch.dto';
import { LaunchesService } from '@app/shared/services/launches.service';
import { PageHeaderComponent } from '../../shared/ui/page-header.component';
import { LaunchesListComponent } from './launches-list.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHeaderComponent, LaunchesListComponent],
  templateUrl: './home.page.html',
})
export class HomePage {
  private readonly launchesService = inject(LaunchesService);
  protected readonly title: string = 'Upcoming Launches';

  private readonly launchesResource = rxResource({
    loader: () => this.launchesService.loadLaunches$(),
  });

  protected launches: Signal<LaunchDto[]> = computed(
    () => this.launchesResource.value() || []
  );

  protected error: Signal<string> = computed(() => {
    const error = this.launchesResource.error() as { message: string } | null;
    if (error) {
      return error.message;
    }
    return '';
  });

  protected status = computed(
    () => ResourceStatus[this.launchesResource.status()]
  );
}
