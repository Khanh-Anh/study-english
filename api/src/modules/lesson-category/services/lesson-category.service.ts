import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LessonCategory } from '../entities/lesson-category.entity';

@Injectable()
export class LessonCategoryService {
  constructor(
    @InjectRepository(LessonCategory)
    private lessonCategoryRepository: Repository<LessonCategory>,
  ) {}

  findAll(): Promise<LessonCategory[]> {
    return this.lessonCategoryRepository.find();
  }

  findOne(id: number): Promise<LessonCategory | null> {
    return this.lessonCategoryRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.lessonCategoryRepository.delete(id);
  }
}
