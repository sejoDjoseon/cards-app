import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/Course.model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass'],
})
export class CardsComponent implements OnInit {
  constructor(private router: Router, private courseService: CourseService) {}

  courseObs$?: Observable<Course>;

  ngOnInit(): void {
    this.courseObs$ = this.courseService.getCourse();
  }

  navigateTrimesterLessons(trimester: number) {
    this.router.navigate(['/cards/lessons', trimester]);
  }

  playLesson(lesson: string) {
    console.log(`play lesson ${lesson}, random mode = false`);
  }

  playRandom() {
    console.log('play random lesson');
  }
}
