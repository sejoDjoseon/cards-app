import { Injectable } from '@angular/core';
import { combineLatestWith, map, Observable, of, Subject } from 'rxjs';
import { CourseNameId } from 'src/app/models/Course.model';

@Injectable()
export class ConfigurationService {
  constructor() {}

  private languages = ['es', 'cat'];

  private courses: CourseNameId[] = [
    { id: '3-inf', name: '3º de infantil' },
    { id: '4-inf', name: '4º de infantil' },
    { id: '5-inf', name: '5º de infantil' },
  ];

  currentLanguage?: string;
  currentCourse?: string;

  configurationChanged = new Subject();

  loadCurrentConfiguration(): Observable<void> {
    return of({ currentLanguage: 'es', currentCourse: '3-inf' }).pipe(
      map(({ currentLanguage, currentCourse }) => {
        this.currentLanguage = currentLanguage;
        this.currentCourse = currentCourse;
        return;
      })
    );
  }

  getLanguages(): Observable<string[]> {
    return of(this.languages);
  }

  getCourses(): Observable<CourseNameId[]> {
    return of(this.courses);
  }

  getConfigurationOptions(): Observable<{
    languages: string[];
    courses: CourseNameId[];
    currentLanguage: string;
    currentCourse: string;
  }> {
    return this.getLanguages().pipe(
      combineLatestWith(this.getCourses()),
      map(([languages, courses]) => {
        return {
          languages,
          courses,
          currentLanguage: this.currentLanguage!!,
          currentCourse: this.currentCourse!!,
        };
      })
    );
  }

  setCurrentConfiguration(lng: string, course: string): Observable<void> {
    this.currentLanguage = lng;
    this.currentCourse = course;
    this.configurationChanged.next(undefined);
    return of(undefined);
  }
}
