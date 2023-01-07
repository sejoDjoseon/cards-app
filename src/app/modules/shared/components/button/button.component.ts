import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

type ButtonType = 'primary' | 'secondary';

@Component({
  selector: 'app-button',
  template: `<div class="content"><ng-content></ng-content></div>`,
  styleUrls: ['./button.component.sass'],
})
export class ButtonComponent {
  @Input('type') type: ButtonType = 'primary';

  @Output() click = new EventEmitter<void>();

  @HostBinding('class') get classes(): Record<string, boolean> {
    return {
      [this.type]: true,
      'action-text': true,
    };
  }
}
