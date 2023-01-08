import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsListRowComponent } from './lessons-list-row.component';

describe('LessonsListRowComponent', () => {
  let component: LessonsListRowComponent;
  let fixture: ComponentFixture<LessonsListRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonsListRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonsListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
