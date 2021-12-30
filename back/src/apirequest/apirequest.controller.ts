import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Apirequest_AxiosService } from './apirequest.axiosOperation.service';
import { Apirequest_DBService } from './apirequest.dbOperation.service';

@ApiTags('apirequest')
@Controller('apirequest')
export class ApirequestController {
  constructor(
    private Apirequest_AxiosService: Apirequest_AxiosService,
    private Apirequest_DBService: Apirequest_DBService,
  ) {}

  @Get('/summoner/:nickname(*)')
  getMatchUpdate(@Param('nickname') nickname: string) {
    return this.Apirequest_AxiosService.getMatchUpdate(nickname);
  }

  @Get('/updatedrank')
  getUpdatedRank() {
    const rankData = this.Apirequest_AxiosService.getUpdatedRank();
    this.Apirequest_DBService.saveRankData(rankData);
    return rankData;
  }
}
