import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ApirequestController } from './apirequest.controller';
import { ApirequestService } from './apirequest.service';

@Module({
  imports: [HttpModule],
  controllers: [ApirequestController],
  providers: [ApirequestService],
})
export class ApirequestModule {}
