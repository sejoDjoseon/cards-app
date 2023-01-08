import { CurrentLessonPipe } from './current-lesson.pipe';

describe('CurrentLessonPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrentLessonPipe();
    expect(pipe).toBeTruthy();
  });
});
