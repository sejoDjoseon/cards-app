import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./container.component.sass'],
})
export class ContainerComponent {}
