import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LAUNCHES } from '@app/shared/data/launches.data';
import { PageHeaderComponent } from '../../shared/ui/page-header.component';
import { LaunchesListComponent } from './launches-list.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHeaderComponent, LaunchesListComponent],
  templateUrl: './home.page.html',
})
export class HomePage {
  protected readonly title: string = 'Upcoming Launches';
  protected launches = LAUNCHES;
}
