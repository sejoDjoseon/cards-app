import { Lesson } from './Lesson.model';

interface Trimester {
  number: number;
  totalLessons: number;
  viewedLessons: number;
}

interface Course {
  id: string;
  language: string;
  name: string;
  currentLesson: {
    trimester: number;
    lesson: Lesson;
  };
  nextLessonId: string;
  trimesters: Trimester[];
}

interface CourseNameId {
  id: string;
  name: string;
}

export { Trimester, Course, CourseNameId };
