import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>
      launch-details for: <b> {{ id() }} </b>
    </p>
  `,
})
export default class LaunchDetailsPage {
  public readonly id: InputSignal<string> = input.required<string>();
}
