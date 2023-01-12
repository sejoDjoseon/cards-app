import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WithLoadingPipe } from 'src/app/modules/shared/pipes/with-loading.pipe';
import { ConfigurationService } from '../../services/configuration.service';
import { CourseService } from '../../services/course.service';

import { CardsComponent } from './cards.component';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsComponent, WithLoadingPipe],
      providers: [CourseService, ConfigurationService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
