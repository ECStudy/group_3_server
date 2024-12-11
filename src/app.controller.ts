import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RoomData } from './DTO';

@Controller('rooms')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoomData(): RoomData[] {
    console.log('getRoomData');
    return this.appService.getRoomData();
  }
}
