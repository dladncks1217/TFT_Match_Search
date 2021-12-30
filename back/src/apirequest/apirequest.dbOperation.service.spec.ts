import { Test, TestingModule } from '@nestjs/testing';
import { Apirequest_DBService } from './apirequest.dbOperation.service';

describe('ApirequestService', () => {
  let service: Apirequest_DBService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Apirequest_DBService],
    }).compile();

    service = module.get<Apirequest_DBService>(Apirequest_DBService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
