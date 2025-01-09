import { Controller, Get } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomData } from 'src/DTO';

@Controller('rooms')
export class RoomController {
  constructor(private readonly RoomService: RoomService) {}

  @Get()
  getRoomData(): RoomData[] {
    console.log('getRoomData');
    return this.RoomService.getRoomData();
  }
}
