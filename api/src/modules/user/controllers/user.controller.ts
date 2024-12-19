import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../services/user.service';
import { User } from '../entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}
  // GET /users
  @Get()
  getHello(): Promise<User[]> {
    return this.usersService.findAll().then((users) => {
      return users;
    });
  }
}
