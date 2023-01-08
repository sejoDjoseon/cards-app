import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lesson } from 'src/app/models/Lesson.model';
import { LessonsService } from '../../services/lessons.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.sass'],
  providers: [LessonsService],
})
export class LessonsComponent implements OnInit {
  constructor(private lessonsService: LessonsService) {}

  lessonsObs?: Observable<Lesson[]>;

  ngOnInit() {
    this.lessonsObs = this.lessonsService.getLessons();
  }
}
