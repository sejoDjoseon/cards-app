import { Component, EventEmitter, Output } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.sass'],
})
export class CircleButtonComponent {
  @Output() click = new EventEmitter<void>();

  faCoffee = faCoffee;
}
