import { Injectable } from '@nestjs/common';
import { RoomData } from 'src/DTO';

@Injectable()
export class RoomService {
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
