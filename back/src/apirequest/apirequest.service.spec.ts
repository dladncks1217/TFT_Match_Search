import { Test, TestingModule } from '@nestjs/testing';
import { ApirequestService } from './apirequest.service';

describe('ApirequestService', () => {
  let service: ApirequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApirequestService],
    }).compile();

    service = module.get<ApirequestService>(ApirequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
