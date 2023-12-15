import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesResolver } from './vehicles.resolver';
import { SwapiWrapperModule } from '../swapi-wrapper/swapi-wrapper.module';

describe('VehiclesResolver', () => {
  let resolver: VehiclesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SwapiWrapperModule],
      providers: [VehiclesResolver],
    }).compile();

    resolver = module.get<VehiclesResolver>(VehiclesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
