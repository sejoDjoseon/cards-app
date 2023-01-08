import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.sass'],
})
export class CircleButtonComponent {
  @Output() click = new EventEmitter<void>();
}
