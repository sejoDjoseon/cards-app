import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsListHeaderComponent } from './lessons-list-header.component';

describe('LessonsListHeaderComponent', () => {
  let component: LessonsListHeaderComponent;
  let fixture: ComponentFixture<LessonsListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonsListHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonsListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
