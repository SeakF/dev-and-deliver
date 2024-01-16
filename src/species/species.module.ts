import { Module } from '@nestjs/common';
import { SwapiWrapperModule } from '../swapi-wrapper/swapi-wrapper.module';
import { SpeciesResolver } from './species.resolver';

@Module({
  imports: [SwapiWrapperModule],
  providers: [SpeciesResolver],
})
export class SpeciesModule {}
