import { Test, TestingModule } from '@nestjs/testing';
import { FilmsResolver } from './films.resolver';
import { SwapiWrapperModule } from '../swapi-wrapper/swapi-wrapper.module';
import { FilmsService } from './films.service';
import { PeopleModule } from '../people/people.module';

describe('FilmsResolver', () => {
  let resolver: FilmsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SwapiWrapperModule, PeopleModule],
      providers: [FilmsResolver, FilmsService],
    }).compile();

    resolver = module.get<FilmsResolver>(FilmsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
