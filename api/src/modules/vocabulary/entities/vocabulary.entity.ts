import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Lesson } from '../../lesson/entities/lesson.entity';

@Entity()
export class Vocabulary {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  word: string;

  @Column('text')
  meaning: string;

  @Column('text', { nullable: true })
  exampleSentence: string;

  @ManyToOne(() => Lesson, (lesson) => lesson.id)
  lesson: Lesson;

  @CreateDateColumn()
  createdAt: Date;
}
