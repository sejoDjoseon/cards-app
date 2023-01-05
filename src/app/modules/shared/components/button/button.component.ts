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
  template: `<ng-content></ng-content>`,
  styleUrls: ['./button.component.sass'],
})
export class ButtonComponent {
  @Input('type') type: ButtonType = 'primary';

  @Output() click = new EventEmitter<void>();

  @HostBinding('class') get buttonType() {
    return this.type;
  }
}
