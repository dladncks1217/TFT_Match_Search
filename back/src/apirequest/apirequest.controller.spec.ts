import { Test, TestingModule } from '@nestjs/testing';
import { ApirequestController } from './apirequest.controller';

describe('ApirequestController', () => {
  let controller: ApirequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApirequestController],
    }).compile();

    controller = module.get<ApirequestController>(ApirequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
