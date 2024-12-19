import { Module } from '@nestjs/common';
import { LessonCategoryController } from './controllers/lesson-category.controller';
import { LessonCategoryService } from './services/lesson-category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonCategory } from './entities/lesson-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LessonCategory])],
  controllers: [LessonCategoryController],
  providers: [LessonCategoryService],
})
export class LessonCategoryModule {}
