import { Args, Resolver, Query } from '@nestjs/graphql';
import { SwapiWrapperService } from '../swapi-wrapper/swapi-wrapper.service';
import { UrlPath } from '../swapi-wrapper/swapi-wrapper.service';

@Resolver()
export class PlanetsResolver {
  private path: Extract<UrlPath, 'planets'> = 'planets';

  constructor(private readonly swapiWrapperService: SwapiWrapperService) {}

  @Query()
  async planet(@Args('id') id: number) {
    return await this.swapiWrapperService.findOne(this.path, id);
  }

  @Query()
  async planets(@Args('page') page?: number) {
    return await this.swapiWrapperService.findAll(this.path, page);
  }
}
