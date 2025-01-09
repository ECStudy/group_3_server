import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';

//채팅방 data 관련 모듈
@Module({
  providers: [RoomService],
  controllers: [RoomController],
})
export class RoomModule {}
