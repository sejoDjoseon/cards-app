import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

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
  faCoffee = faCoffee;

  lessons = LESSONS_MOCK;
}
