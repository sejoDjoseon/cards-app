import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Lesson } from 'src/app/models/Lesson.model';

@Injectable()
export class LessonsService {
  constructor() {}

  lessons: Lesson[] = [
    { id: '1', number: 1, name: 'Ordinales', viewed: true },
    { id: '1', number: 1, name: 'Ordinales', viewed: true },
    { id: '1', number: 1, name: 'Ordinales', viewed: true },
    { id: '1', number: 1, name: 'Ordinales', viewed: true },
    { id: '1', number: 1, name: 'Ordinales', viewed: false },
    { id: '1', number: 1, name: 'Ordinales', viewed: false },
    { id: '1', number: 1, name: 'Ordinales', viewed: false },
    { id: '1', number: 1, name: 'Ordinales', viewed: false },
    { id: '1', number: 1, name: 'Ordinales', viewed: false },
    { id: '1', number: 1, name: 'Ordinales', viewed: false },
    { id: '1', number: 1, name: 'Ordinales', viewed: false },
    { id: '1', number: 1, name: 'Ordinales', viewed: false },
    { id: '1', number: 1, name: 'Ordinales', viewed: false },
  ];

  getLessons(): Observable<Lesson[]> {
    return of(this.lessons);
  }
}
