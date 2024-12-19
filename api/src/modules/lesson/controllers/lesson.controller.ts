import { Controller, Get } from '@nestjs/common';
import { LessonService } from '../services/lesson.service';
import { Lesson } from '../entities/lesson.entity';

@Controller('lessons')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}
  // GET /lessons
  @Get()
  getHello(): Promise<Lesson[]> {
    return this.lessonService.findAll().then((lessons) => {
      console.log(lessons);
      return lessons;
    });
  }
}
