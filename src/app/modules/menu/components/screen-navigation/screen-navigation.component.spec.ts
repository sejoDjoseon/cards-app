import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenNavigationComponent } from './screen-navigation.component';

describe('ScreenNavigationComponent', () => {
  let component: ScreenNavigationComponent;
  let fixture: ComponentFixture<ScreenNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
