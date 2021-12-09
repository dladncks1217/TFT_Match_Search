import { Module } from '@nestjs/common';
import { ApirequestController } from './apirequest.controller';
import { ApirequestService } from './apirequest.service';

@Module({
  controllers: [ApirequestController],
  providers: [ApirequestService],
})
export class ApirequestModule {}
