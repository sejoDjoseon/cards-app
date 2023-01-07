import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appClickable]',
})
export class ClickableDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.boxShadow = '0 0.2em 0 0 rgba(0,0,0,0.4)';
    this.el.nativeElement.style.cursor = 'pointer';
  }

  @Output() click = new EventEmitter();

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.boxShadow = '0 0.22em 0 0 rgba(0,0,0,0.25)';
    this.el.nativeElement.style.transform = 'translateY(-2px)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.boxShadow = '0 0.2em 0 0 rgba(0,0,0,0.4)';
    this.el.nativeElement.style.transform = 'translateY(0px)';
  }
}
