import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

//npm install @nestjs/jwt @nestjs/passport passport passport-local passport-jwt bcrypt

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'your-secret-key', // 환경 변수로 관리하는 것이 좋습니다.
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
