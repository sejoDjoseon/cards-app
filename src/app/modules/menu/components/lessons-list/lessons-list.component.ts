import { Component } from '@angular/core';
import { IconName } from 'src/shared/icons-helper';

const LESSONS_MOCK = [
  { number: 1, name: 'Ordinales', viewed: true },
  { number: 1, name: 'Ordinales', viewed: true },
  { number: 1, name: 'Ordinales', viewed: true },
  { number: 1, name: 'Ordinales', viewed: true },
  { number: 1, name: 'Ordinales', viewed: true },
  { number: 1, name: 'Ordinales', viewed: true },
  { number: 1, name: 'Ordinales', viewed: true },
  { number: 1, name: 'Ordinales', viewed: true },
  { number: 1, name: 'Ordinales', viewed: true },
  { number: 1, name: 'Ordinales', viewed: true },
  { number: 1, name: 'Ordinales', viewed: true },
  { number: 1, name: 'Ordinales', viewed: true },
  { number: 1, name: 'Ordinales', viewed: true },
  { number: 1, name: 'Ordinales', viewed: true },
];

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.sass'],
})
export class LessonsListComponent {
  readonly iconsName = IconName;

  lessons = LESSONS_MOCK;

  playLesson(i: number, random = false) {
    const lesson = this.lessons[i];
    console.log(`play lesson ${lesson}, mode random = ${random}`);
  }
}
