import { Test, TestingModule } from '@nestjs/testing';
import { PeopleService } from './people.service';
import { SwapiWrapperModule } from '../swapi-wrapper/swapi-wrapper.module';

describe('PeopleService', () => {
  let service: PeopleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SwapiWrapperModule],
      providers: [PeopleService],
      exports: [PeopleService],
    }).compile();

    service = module.get<PeopleService>(PeopleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
