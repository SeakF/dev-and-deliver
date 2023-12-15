import { Test, TestingModule } from '@nestjs/testing';
import { SpeciesResolver } from './species.resolver';
import { SwapiWrapperModule } from '../swapi-wrapper/swapi-wrapper.module';

describe('SpeciesResolver', () => {
  let resolver: SpeciesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SwapiWrapperModule],
      providers: [SpeciesResolver],
    }).compile();

    resolver = module.get<SpeciesResolver>(SpeciesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
