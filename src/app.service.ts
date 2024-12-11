import { Injectable } from '@nestjs/common';
import { RoomData } from './DTO';

@Injectable()
export class AppService {
  getRoomData(): RoomData[] {
    return [
      {
        room_id: '1',
        title: '재석',
        sub_title: '이카운트 -> 고덕역',
      },
      {
        room_id: '2',
        title: '준하',
        sub_title: '이카운트 -> 천호역',
      },
    ];
  }
}
