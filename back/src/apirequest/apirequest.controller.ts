import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApirequestService } from './apirequest.service';

@ApiTags('apirequest')
@Controller('apirequest')
export class ApirequestController {
  constructor(private ApirequestService: ApirequestService) {}

  @Get('/summoner/:nickname(*)')
  getMatchUpdate(@Param('nickname') nickname: string) {
    return this.ApirequestService.getMatchUpdate(nickname);
  }

  @Get('/updatedrank')
  getUpdatedRank() {
    return this.ApirequestService.getUpdatedRank();
  }
}
