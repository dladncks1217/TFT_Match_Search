import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ApirequestController } from './apirequest.controller';
import { Apirequest_AxiosService } from './apirequest.axiosOperation.service';
import { Apirequest_DBService } from './apirequest.dbOperation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rank } from 'src/entities/Rank';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Rank])],
  controllers: [ApirequestController],
  providers: [Apirequest_AxiosService, Apirequest_DBService],
})
export class ApirequestModule {}
