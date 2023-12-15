import { Test, TestingModule } from '@nestjs/testing';
import { SwapiWrapperService } from './swapi-wrapper.service';
import { HttpExtensionModule } from '../http-extension/http-extension.module';
import { HttpExtensionService } from '../http-extension/http-extension.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

class HttpExtensionServiceMock {};

const cacheManagerMock = {
  get: jest.fn(),
  set: jest.fn(),
};

describe('SwapiWrapperService', () => {
  let service: SwapiWrapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpExtensionModule],
      providers: [
        SwapiWrapperService,
        { provide: HttpExtensionService, useClass: HttpExtensionServiceMock },
        { provide: CACHE_MANAGER, useValue: cacheManagerMock },
      ],
      exports: [SwapiWrapperService]
    }).compile();

    service = module.get<SwapiWrapperService>(SwapiWrapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
