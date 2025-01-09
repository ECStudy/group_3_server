import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      username: 'testuser',
      password: bcrypt.hashSync('password', 10), // 실제로는 데이터베이스에 저장된 해시된 비밀번호를 사용
    },
  ];

  async findByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
