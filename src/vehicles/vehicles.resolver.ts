import { Args, Resolver, Query } from '@nestjs/graphql';
import { SwapiWrapperService } from '../swapi-wrapper/swapi-wrapper.service';
import { UrlPath } from '../swapi-wrapper/swapi-wrapper.service';

@Resolver()
export class VehiclesResolver {
  private path: Extract<UrlPath, 'vehicles'> = 'vehicles';

  constructor(private readonly swapiWrapperService: SwapiWrapperService) {}

  @Query()
  async vehicle(@Args('id') id: number) {
    return await this.swapiWrapperService.findOne(this.path, id);
  }

  @Query()
  async vehicles(@Args('page') page?: number) {
    return await this.swapiWrapperService.findAll(this.path, page);
  }
}
