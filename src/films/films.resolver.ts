import { Args, Resolver, Query } from '@nestjs/graphql';
import { SwapiWrapperService } from '../swapi-wrapper/swapi-wrapper.service';
import { UrlPath } from '../swapi-wrapper/swapi-wrapper.service';
import { FilmsService } from './films.service';

@Resolver()
export class FilmsResolver {
  private path: Extract<UrlPath, 'films'> = 'films';

  constructor(
    private readonly swapiWrapperService: SwapiWrapperService,
    private readonly filmsService: FilmsService,
  ) {}

  @Query()
  async film(@Args('id') id: number) {
    return await this.swapiWrapperService.findOne(this.path, id);
  }

  @Query()
  async films(@Args('page') page?: number) {
    return await this.swapiWrapperService.findAll(this.path, page);
  }

  @Query()
  async uniqueWordOccurancesAndMostPopularCharacters() {
    return {
      mostPopularCharacters:
        await this.filmsService.findMostPopularCharacterInOpenings(),
      uniqueWordOccurances: await this.filmsService.countWordsInOpeningCrawl(),
    };
  }
}
