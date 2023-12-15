import { Test, TestingModule } from '@nestjs/testing';
import { FilmsService } from './films.service';
import { SwapiWrapperService } from '../swapi-wrapper/swapi-wrapper.service';
import { SwapiWrapperModule } from '../swapi-wrapper/swapi-wrapper.module';
import { PeopleModule } from '../people/people.module';
import { PeopleService } from '../people/people.service';

class SwapiWrapperServiceMock {
  async findAll() {
    const mockResponse = {
      data: [
        { opening_crawl: 'It is a\r Darth Vader dark time... Luke Skywalker' },
        { opening_crawl: 'It\r\n is a Luke Skywalker period of\n civil war.' }
      ],
      isNextPage: false,
    }

    return Promise.resolve(mockResponse);
  }
}

class PeopleServiceMock {
  async getAllNamesWithoutPagination() {
    return ['Luke Skywalker', 'Leia Organa', 'Han Solo', 'Darth Vader'];
  }
}

describe('FilmsService', () => {
  let service: FilmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SwapiWrapperModule, PeopleModule],
      providers: [
        FilmsService,
        { provide: SwapiWrapperService, useClass: SwapiWrapperServiceMock },
        { provide: PeopleService, useClass: PeopleServiceMock }
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
      .mockResolvedValue(['It is a Darth Vader dark time... Luke Skywalker', 'It is a Luke Skywalker period of civil war.']);

    const result = await service.countWordsInOpeningCrawl();

    expect(result).toEqual(['it 2', 'is 2', 'a 2', 'darth 1', 'vader 1', 'dark 1', 'time 1', 'luke 2', 'skywalker 2', 'period 1', 'of 1', 'civil 1', 'war 1']);
  });

  it('should find most popular character in films openings', async () => {
    const result = await service.findMostPopularCharacterInOpenings();

    expect(result).toEqual(['Luke Skywalker']);
  })
});
