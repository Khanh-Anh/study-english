import { Module } from '@nestjs/common';
import { UserProgressController } from './controllers/user-progress.controller';
import { UserProgressService } from './services/user-progress.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProgress } from './entities/user-progress.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserProgress])],
  controllers: [UserProgressController],
  providers: [UserProgressService],
})
export class UserProgressModule {}
