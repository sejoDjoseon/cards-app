import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimesterProgressComponent } from './trimester-progress.component';

describe('TrimesterProgressComponent', () => {
  let component: TrimesterProgressComponent;
  let fixture: ComponentFixture<TrimesterProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrimesterProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrimesterProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
