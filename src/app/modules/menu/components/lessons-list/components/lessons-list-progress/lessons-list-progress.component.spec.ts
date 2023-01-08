import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsListProgressComponent } from './lessons-list-progress.component';

describe('LessonsListProgressComponent', () => {
  let component: LessonsListProgressComponent;
  let fixture: ComponentFixture<LessonsListProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonsListProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonsListProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
