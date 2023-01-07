import { Component, DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClickableDirective } from './clickable.directive';

@Component({
  template: ` <div appClickable>Something</div> `,
})
class TestComponent {}

describe('ClickableDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let el: DebugElement;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ClickableDirective, TestComponent],
    }).createComponent(TestComponent);

    fixture.detectChanges(); // initial binding

    el = fixture.debugElement.query(By.directive(ClickableDirective));
  });

  it('should create an instance', () => {
    expect(el).toBeTruthy();
  });
});
