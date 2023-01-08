import { Pipe, PipeTransform } from '@angular/core';
import { Lesson } from 'src/app/models/Lesson.model';

@Pipe({
  name: 'currentLesson',
})
export class CurrentLessonPipe implements PipeTransform {
  transform({
    lesson,
    trimester,
  }: {
    lesson: Lesson;
    trimester: number;
  }): string {
    return `${trimester}º Trimestre - Sesión ${lesson.number}, ${lesson.name}`;
  }
}
