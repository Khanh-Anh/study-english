import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vocabulary } from '../entities/vocabulary.entity';

@Injectable()
export class VocabularyService {
  constructor(
    @InjectRepository(Vocabulary)
    private vocabularyRepository: Repository<Vocabulary>,
  ) {}

  findAll(): Promise<Vocabulary[]> {
    return this.vocabularyRepository.find();
  }

  findOne(id: number): Promise<Vocabulary | null> {
    return this.vocabularyRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.vocabularyRepository.delete(id);
  }
}
