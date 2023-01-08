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
  currentLesson: Lesson;
  trimesters: Trimester[];
}

export { Trimester, Course };
