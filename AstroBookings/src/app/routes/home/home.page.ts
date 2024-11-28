import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LAUNCHES } from '@app/shared/data/launches.data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, RouterLink],
  templateUrl: './home.page.html',
})
export class HomePage {
  protected launches = LAUNCHES;
}
