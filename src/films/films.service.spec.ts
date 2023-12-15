import { Test, TestingModule } from '@nestjs/testing';
import { FilmsService } from './films.service';
import { SwapiWrapperService } from '../swapi-wrapper/swapi-wrapper.service';
import { SwapiWrapperModule } from '../swapi-wrapper/swapi-wrapper.module';

class SwapiWrapperServiceMock {
  async findAll() {
    const mockResponse = {
      data: [
        { opening_crawl: 'It is a\r dark time...' },
        { opening_crawl: 'It\r\n is a period of\n civil war.' }
      ],
      isNextPage: false,
    }

    return Promise.resolve(mockResponse);
  }
}

describe('FilmsService', () => {
  let service: FilmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SwapiWrapperModule],
      providers: [
        FilmsService,
        { provide: SwapiWrapperService, useClass: SwapiWrapperServiceMock }
      ],
    }).compile();

    service = module.get<FilmsService>(FilmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should count unique words occurances', async () => {
    jest
      // service as any cuz jest cannot spy on private methods
      .spyOn(service as any, 'getAllOpeningCrawls')
      .mockResolvedValue(['It is a dark time...', 'It is a period of civil war.']);

    const result = await service.countWordsInOpeningCrawl();

    expect(result).toEqual(['it 2', 'is 2', 'a 2', 'dark 1', 'time 1', 'period 1', 'of 1', 'civil 1', 'war 1']);
  });
});
