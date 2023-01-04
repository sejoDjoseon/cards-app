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
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
})
export class ButtonComponent {
  @Input('type') type: ButtonType = 'primary';

  @Output() click = new EventEmitter<void>();

  @HostBinding('class') get buttonType() {
    return this.type;
  }
}
