import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Lesson } from 'src/app/models/Lesson.model';
import { ConfigurationService } from '../../services/configuration.service';
import { LessonsService } from '../../services/lessons.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.sass'],
  providers: [LessonsService],
})
export class LessonsComponent implements OnInit {
  constructor(
    private lessonsService: LessonsService,
    private configurationService: ConfigurationService,
    private router: Router
  ) {}

  lessonsObs?: Observable<Lesson[]>;

  ngOnInit() {
    this.lessonsObs = this.lessonsService.getLessons();

    this.configurationService.configurationChanged.subscribe(() => {
      this.router.navigate(['../']);
    });
  }
}
