import { Module } from '@nestjs/common';
import { SwapiWrapperModule } from '../swapi-wrapper/swapi-wrapper.module';
import { PlanetsResolver } from './planets.resolver';

@Module({
  imports: [SwapiWrapperModule],
  providers: [PlanetsResolver]
})
export class PlanetsModule {}
