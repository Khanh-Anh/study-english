import { Controller, Get } from '@nestjs/common';
import { VocabularyService } from '../services/lesson.service';
import { Vocabulary } from '../entities/vocabulary.entity';

@Controller('vocabularies')
export class VocabularyController {
  constructor(private readonly vocabularyService: VocabularyService) {}
  // GET /vocabularies
  @Get()
  getHello(): Promise<Vocabulary[]> {
    return this.vocabularyService.findAll().then((vocabularies) => {
      console.log(vocabularies);
      return vocabularies;
    });
  }
}
