import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApirequestController } from './apirequest/apirequest.controller';
import { Apirequest_AxiosService } from './apirequest/apirequest.axiosOperation.service';
import { ApirequestModule } from './apirequest/apirequest.module';
import { GamedataController } from './gamedata/gamedata.controller';
import { GamedataService } from './gamedata/gamedata.service';
import { GamedataModule } from './gamedata/gamedata.module';
import * as ormconfig from '../ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userMatchData } from './entities/userMatch.data';
import { Rank } from './entities/Rank';
import { HttpModule } from '@nestjs/axios';
import { Apirequest_DBService } from './apirequest/apirequest.dbOperation.service';

@Module({
  imports: [
    ApirequestModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule,
    GamedataModule,
    TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forFeature([userMatchData, Rank]),
  ],
  controllers: [AppController, ApirequestController, GamedataController],
  providers: [
    AppService,
    Apirequest_AxiosService,
    Apirequest_DBService,
    GamedataService,
  ],
})
export class AppModule {}
