import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-link',
  template: `<u><ng-content></ng-content></u>`,
  styles: [
    `
    :host
      cursor: pointer
  `,
  ],
})
export class LinkComponent {
  @Output() click = new EventEmitter<void>();

  onClick() {
    console.log('click link');
  }
}
