import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { RoomModule } from './room/room.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ChatModule, RoomModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
