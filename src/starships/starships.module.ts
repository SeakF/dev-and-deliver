import { Module } from '@nestjs/common';
import { SwapiWrapperModule } from '../swapi-wrapper/swapi-wrapper.module';
import { StarshipsResolver } from './starships.resolver';

@Module({
  imports: [SwapiWrapperModule],
  providers: [StarshipsResolver]
})
export class StarshipsModule {}
