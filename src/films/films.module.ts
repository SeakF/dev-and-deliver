import { Module } from '@nestjs/common';
import { SwapiWrapperModule } from '../swapi-wrapper/swapi-wrapper.module';
import { FilmsResolver } from './films.resolver';
import { FilmsService } from './films.service';
import { PeopleModule } from 'src/people/people.module';

@Module({
  imports: [SwapiWrapperModule, PeopleModule],
  providers: [FilmsResolver, FilmsService]
})
export class FilmsModule {}
