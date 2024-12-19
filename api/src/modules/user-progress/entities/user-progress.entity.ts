import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Lesson } from '../../lesson/entities/lesson.entity';

@Entity()
export class UserProgress {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @ManyToOne(() => Lesson, (lesson) => lesson.id)
  lesson: Lesson;

  @Column({ default: false })
  completed: boolean;

  @Column({ nullable: true })
  score: number;

  @Column({ default: 0 })
  attempts: number;

  @CreateDateColumn()
  createdAt: Date;
}
