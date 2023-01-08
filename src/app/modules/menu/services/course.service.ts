import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Course } from 'src/app/models/Course.model';

@Injectable()
export class CourseService {
  constructor() {}

  private course: Course = {
    id: '1',
    language: 'es',
    name: '1º de infantil',
    currentLesson: {
      trimester: 2,
      lesson: {
        id: 'es-1-inf-2-25',
        name: 'Ordinales, Fracciones y Decimales',
        number: 25,
        viewed: false,
      },
    },
    nextLessonId: 'es-1-inf-2-26',
    trimesters: [
      { number: 1, totalLessons: 50, viewedLessons: 50 },
      { number: 2, totalLessons: 50, viewedLessons: 25 },
      { number: 3, totalLessons: 50, viewedLessons: 0 },
    ],
  };

  getCourse(): Observable<Course> {
    return of(this.course).pipe(delay(500));
  }
}
