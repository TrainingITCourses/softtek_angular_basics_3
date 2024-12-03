import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LaunchesService } from '@app/shared/services/launches.service';
import { PageHeaderComponent } from '../../shared/ui/page-header.component';
import { LaunchesListComponent } from './launches-list.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHeaderComponent, LaunchesListComponent],
  templateUrl: './home.page.html',
})
export class HomePage {
  launchesService = inject(LaunchesService);
  protected readonly title: string = 'Upcoming Launches';
  protected launches = this.launchesService.loadLaunches();
}
