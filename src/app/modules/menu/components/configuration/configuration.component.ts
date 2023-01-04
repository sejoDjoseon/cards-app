import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.sass'],
})
export class ConfigurationComponent {
  @Output() close = new EventEmitter();
}
