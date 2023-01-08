import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Lesson } from 'src/app/models/Lesson.model';

@Injectable()
export class LessonsService {
  constructor() {}

  lessons: Lesson[] = [
    { number: 1, name: 'Ordinales', viewed: true },
    { number: 1, name: 'Ordinales', viewed: true },
    { number: 1, name: 'Ordinales', viewed: false },
    { number: 1, name: 'Ordinales', viewed: false },
    { number: 1, name: 'Ordinales', viewed: false },
    { number: 1, name: 'Ordinales', viewed: false },
    { number: 1, name: 'Ordinales', viewed: false },
    { number: 1, name: 'Ordinales', viewed: false },
    { number: 1, name: 'Ordinales', viewed: false },
    { number: 1, name: 'Ordinales', viewed: false },
    { number: 1, name: 'Ordinales', viewed: false },
    { number: 1, name: 'Ordinales', viewed: false },
    { number: 1, name: 'Ordinales', viewed: false },
    { number: 1, name: 'Ordinales', viewed: false },
  ];

  getLessons(): Observable<Lesson[]> {
    return of(this.lessons);
  }
}
