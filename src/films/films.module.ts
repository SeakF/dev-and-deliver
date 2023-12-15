import { Module } from '@nestjs/common';
import { SwapiWrapperModule } from 'src/swapi-wrapper/swapi-wrapper.module';
import { FilmsResolver } from './films.resolver';

@Module({
  imports: [SwapiWrapperModule],
  providers: [FilmsResolver]
})
export class FilmsModule {}
