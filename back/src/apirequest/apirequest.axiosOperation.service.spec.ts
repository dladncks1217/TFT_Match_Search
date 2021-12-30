import { Test, TestingModule } from '@nestjs/testing';
import { Apirequest_AxiosService } from './apirequest.axiosOperation.service';

describe('ApirequestService', () => {
  let service: Apirequest_AxiosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Apirequest_AxiosService],
    }).compile();

    service = module.get<Apirequest_AxiosService>(Apirequest_AxiosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
