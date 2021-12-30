import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Rank } from 'src/entities/Rank';
import { Repository } from 'typeorm';

@Injectable()
export class Apirequest_DBService {
  constructor(
    @InjectRepository(Rank)
    private rankRepository: Repository<Rank>,
  ) {}

  // 게임 랭킹 저장하기
  async saveRankData(data: Object) {
    try {
      //   this.rankRepository;
    } catch (e) {
      console.error(e);
      return e;
    }
  }
}
