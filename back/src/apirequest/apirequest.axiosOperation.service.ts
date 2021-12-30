import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Rank } from 'src/entities/Rank';
import { Repository } from 'typeorm';

@Injectable()
export class Apirequest_AxiosService {
  constructor(
    private readonly httpService: HttpService,
  ) // @InjectRepository(Rank)
  // private rankRepository: Repository<Rank>,
  {}

  // 매치 업데이트
  async getMatchUpdate(nickname) {
    try {
      const puuid = await this.getPuuid(nickname);
      const matchNumbers = await this.getMatchNumber(puuid, 1);
      const matchresult = await this.getMatchData(matchNumbers);

      return matchresult;
    } catch (e) {
      return console.error(e);
    }
  }

  // 게임 매치번호
  async getMatchNumber(puuid: string, count: number): Promise<any> {
    console.log('게임 매치번호를 가져옵니다.');
    const result = await this.httpService
      .get(
        `https://asia.api.riotgames.com/tft/match/v1/matches/by-puuid/${puuid}/ids?count=${count}&api_key=${process.env.RIOT_API_KEY}`,
      )
      .toPromise();
    return result.data;
  }

  // 게임 데이터 가져오기
  async getMatchData(matchid: string): Promise<any> {
    console.log('게임 데이터를 가져옵니다.');
    const result = await this.httpService
      .get(
        `https://asia.api.riotgames.com/tft/match/v1/matches/${matchid}?api_key=${process.env.RIOT_API_KEY}`,
      )
      .toPromise();
    console.log(result.data.info);
    return result.data;
  }
  // puuid 가져오기
  async getPuuid(nickname: string): Promise<any> {
    console.log('puuid를 가져옵니다.');
    const result = await this.httpService
      .get(
        `https://kr.api.riotgames.com/tft/summoner/v1/summoners/by-name/${encodeURIComponent(
          nickname,
        )}`,
        {
          headers: { 'X-Riot-Token': process.env.RIOT_API_KEY },
        },
      )
      .toPromise();
    return result.data.puuid;
  }

  // 게임 랭킹 가져오기
  async getUpdatedRank(): Promise<any> {
    try {
      console.log('현재 랭킹 가져오는 요청을 합니다.');
      const result = await this.httpService
        .get(
          `https://kr.api.riotgames.com/tft/league/v1/challenger?api_key=${process.env.RIOT_API_KEY}`,
        )
        .toPromise();
      return result.data;
    } catch (e) {
      console.error(e);
      return e;
    }
  }
}
