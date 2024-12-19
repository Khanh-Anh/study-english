import { Injectable } from '@nestjs/common';
import { User } from '../../user/entities/user.entity';
import * as bcrypt from 'bcryptjs';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.usersRepository.findOneBy({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
      console.log('🚀 ~ validateUser ~ user:', user);
      return user;
    }
    return null;
  }
}
