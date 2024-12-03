import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LAUNCHES } from '@app/shared/data/launches.data';
import { PageHeaderComponent } from '../../shared/ui/page-header.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, RouterLink, PageHeaderComponent],
  templateUrl: './home.page.html',
})
export class HomePage {
  protected readonly title: string = 'Upcoming Launches';
  protected launches = LAUNCHES;
}
