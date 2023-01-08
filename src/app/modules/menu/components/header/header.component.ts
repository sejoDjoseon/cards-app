import { Component, EventEmitter, Output } from '@angular/core';
import { IconName } from 'src/shared/icons-helper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  @Output()
  openOptions = new EventEmitter<void>();

  iconName = IconName;
}
