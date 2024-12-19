import { Module } from '@nestjs/common';
import { VocabularyController } from './controllers/vocabulary.controller';
import { VocabularyService } from './services/lesson.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vocabulary } from './entities/vocabulary.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vocabulary])],
  controllers: [VocabularyController],
  providers: [VocabularyService],
})
export class VocabularyModule {}
