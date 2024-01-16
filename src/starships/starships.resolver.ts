import { Args, Resolver, Query } from '@nestjs/graphql';
import { SwapiWrapperService } from '../swapi-wrapper/swapi-wrapper.service';
import { UrlPath } from '../swapi-wrapper/swapi-wrapper.service';

@Resolver()
export class StarshipsResolver {
  private path: Extract<UrlPath, 'starships'> = 'starships';

  constructor(private readonly swapiWrapperService: SwapiWrapperService) {}

  @Query()
  async starship(@Args('id') id: number) {
    return await this.swapiWrapperService.findOne(this.path, id);
  }

  @Query()
  async starships(@Args('page') page?: number) {
    return await this.swapiWrapperService.findAll(this.path, page);
  }
}
