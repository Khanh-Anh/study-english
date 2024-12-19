import { Controller, Get } from '@nestjs/common';
import { UserProgressService } from '../services/user-progress.service';
import { UserProgress } from '../entities/user-progress.entity';

@Controller('vocabularies')
export class UserProgressController {
  constructor(private readonly userProgressService: UserProgressService) {}
  // GET /vocabularies
  @Get()
  getHello(): Promise<UserProgress[]> {
    return this.userProgressService.findAll().then((userProgress) => {
      console.log(userProgress);
      return userProgress;
    });
  }
}
