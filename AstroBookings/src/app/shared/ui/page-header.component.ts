import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from '@angular/core';

@Component({
  selector: 'lab-page-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header>
      <h3>{{ title() }}</h3>
      @if(subtitle()){
      <p>{{ subtitle() }}</p>
      }
    </header>
  `,
})
export class PageHeaderComponent {
  public readonly title: InputSignal<string> = input.required();
  public readonly subtitle: InputSignal<string | undefined> = input();
}
