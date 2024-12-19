import { Module } from '@nestjs/common';
import { LessonController } from './controllers/lesson.controller';
import { LessonService } from './services/lesson.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson])],
  controllers: [LessonController],
  providers: [LessonService],
})
export class LessonModule {}
