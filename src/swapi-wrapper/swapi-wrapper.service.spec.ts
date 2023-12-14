import { Test, TestingModule } from '@nestjs/testing';
import { SwapiWrapperService } from './swapi-wrapper.service';

describe('SwapiWrapperService', () => {
  let service: SwapiWrapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SwapiWrapperService],
    }).compile();

    service = module.get<SwapiWrapperService>(SwapiWrapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
