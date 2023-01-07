import { Component, EventEmitter, HostBinding, Output } from '@angular/core';

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

  @HostBinding('class') get classes(): Record<string, boolean> {
    return {
      'action-text': true,
    };
  }
}
