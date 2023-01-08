import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  combineLatest,
  combineLatestWith,
  concat,
  concatAll,
  map,
  Observable,
} from 'rxjs';
import { CourseNameId } from 'src/app/models/Course.model';
import { ConfigurationService } from '../../services/configuration.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.sass'],
})
export class ConfigurationComponent implements OnInit {
  constructor(private configurationService: ConfigurationService) {}

  @Output() close = new EventEmitter();

  currentCourse?: string;
  currentLanguage?: string;

  optionsObs$?: Observable<{
    languages: string[];
    courses: CourseNameId[];
  }>;

  ngOnInit() {
    this.optionsObs$ = this.configurationService.getConfigurationOptions().pipe(
      map((options) => {
        this.currentCourse = options.currentCourse;
        this.currentLanguage = options.currentLanguage;
        return options;
      })
    );
  }

  saveAndClose() {
    this.configurationService
      .setCurrentCourse(this.currentCourse!!)
      .pipe(
        combineLatestWith(
          this.configurationService.setCurrentLanguage(this.currentLanguage!!)
        )
      )
      .subscribe(() => {
        this.close.emit();
      });
  }
}
