import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from '@angular/core';
import { RocketDto } from '@app/shared/models/rocket.dto';

@Component({
  selector: 'lab-list-rockets',
  imports: [],
  template: `
    <table>
      <thead>
        <th>Name</th>
        <th>Capacity</th>
      </thead>
      @for(rocket of rockets(); track rocket.id){
      <tr>
        <td>{{ rocket.name }}</td>
        <td>{{ rocket.capacity }}</td>
      </tr>
      }
    </table>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListRocketsComponent {
  public readonly rockets: InputSignal<RocketDto[]> =
    input.required<RocketDto[]>();
}
