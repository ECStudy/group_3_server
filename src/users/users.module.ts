import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

//npm install @nestjs/jwt @nestjs/passport passport passport-local passport-jwt bcrypt

@Module({
  controllers: [],
  providers: [UsersService],
})
export class UsersModule {}
