import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserProgress } from '../entities/user-progress.entity';

@Injectable()
export class UserProgressService {
  constructor(
    @InjectRepository(UserProgress)
    private userProgressRepository: Repository<UserProgress>,
  ) {}

  findAll(): Promise<UserProgress[]> {
    return this.userProgressRepository.find();
  }

  findOne(id: number): Promise<UserProgress | null> {
    return this.userProgressRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.userProgressRepository.delete(id);
  }
}
