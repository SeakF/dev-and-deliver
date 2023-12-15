import { Test, TestingModule } from '@nestjs/testing';
import { SwapiWrapperService } from './swapi-wrapper.service';
import { HttpExtensionModule } from '../http-extension/http-extension.module';

describe('SwapiWrapperService', () => {
  let service: SwapiWrapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpExtensionModule],
      providers: [SwapiWrapperService],
      exports: [SwapiWrapperService]
    }).compile();

    service = module.get<SwapiWrapperService>(SwapiWrapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
