import { Controller, Get } from '@nestjs/common';
import { LessonCategoryService } from '../services/lesson-category.service';
import { LessonCategory } from '../entities/lesson-category.entity';

@Controller('lesson-categories')
export class LessonCategoryController {
  constructor(private readonly lessonCategoryService: LessonCategoryService) {}
  // GET /lesson-categories
  @Get()
  getHello(): Promise<LessonCategory[]> {
    return this.lessonCategoryService.findAll().then((lessonCategories) => {
      console.log(lessonCategories);
      return lessonCategories;
    });
  }
}
