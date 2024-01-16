import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { SwapiWrapperModule } from '../swapi-wrapper/swapi-wrapper.module';

@Module({
  imports: [SwapiWrapperModule],
  providers: [PeopleService],
  exports: [PeopleService],
})
export class PeopleModule {}
