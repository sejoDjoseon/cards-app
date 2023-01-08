import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-lessons-list-row',
  templateUrl: './lessons-list-row.component.html',
  styleUrls: ['./lessons-list-row.component.sass'],
})
export class LessonsListRowComponent {
  showActions = false;
  @HostListener('mouseenter') onMouseEnter() {
    this.showActions = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.showActions = false;
  }
}
