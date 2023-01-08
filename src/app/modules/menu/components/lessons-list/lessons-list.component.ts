import { Component, Input } from '@angular/core';
import { Lesson } from 'src/app/models/Lesson.model';
import { IconName } from 'src/shared/icons-helper';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.sass'],
})
export class LessonsListComponent {
  readonly iconsName = IconName;

  @Input()
  lessons: Lesson[] = [];

  playLesson(i: number, random = false) {
    const lesson = this.lessons[i];
    console.log(`play lesson ${lesson}, mode random = ${random}`);
  }

  getIconViewed(viewed: boolean): IconName {
    return viewed ? IconName.Viewed : IconName.NotViewed;
  }
}
