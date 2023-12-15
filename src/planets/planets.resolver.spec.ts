import { Test, TestingModule } from '@nestjs/testing';
import { PlanetsResolver } from './planets.resolver';
import { SwapiWrapperModule } from '../swapi-wrapper/swapi-wrapper.module';

describe('PlanetsResolver', () => {
  let resolver: PlanetsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SwapiWrapperModule],
      providers: [PlanetsResolver],
    }).compile();

    resolver = module.get<PlanetsResolver>(PlanetsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
