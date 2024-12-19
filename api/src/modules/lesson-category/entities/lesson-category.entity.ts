import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Lesson } from '../../lesson/entities/lesson.entity';
import { Category } from '../../category/entities/category.entity';

@Entity()
export class LessonCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Lesson, (lesson) => lesson.id)
  lesson: Lesson;

  @ManyToOne(() => Category, (category) => category.id)
  category: Category;
}
