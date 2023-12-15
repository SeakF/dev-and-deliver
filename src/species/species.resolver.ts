import { Args, Resolver, Query } from '@nestjs/graphql';
import { SwapiWrapperService } from '../swapi-wrapper/swapi-wrapper.service';
import { UrlPath } from '../swapi-wrapper/swapi-wrapper.service';

@Resolver()
export class SpeciesResolver {
    private path: Extract<UrlPath, 'species'> = 'species';

    constructor(private readonly swapiWrapperService: SwapiWrapperService) {}

    @Query()
    async species(@Args('id') id: number) {
        return await this.swapiWrapperService.findOne(this.path, id)
    }

    @Query()
    async allSpecies(@Args('page') page?: number) {
        return await this.swapiWrapperService.findAll(this.path, page);
    }
}
