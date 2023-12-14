import { Args, Resolver, Query,  } from '@nestjs/graphql';
import { SwapiWrapperService } from 'src/swapi-wrapper/swapi-wrapper.service';
import { UrlPath } from 'src/swapi-wrapper/swapi-wrapper.service';

@Resolver()
export class FilmsResolver {
    private path: Extract<UrlPath, 'films'> = 'films';

    constructor(private readonly swapiWrapperService: SwapiWrapperService) {}

    @Query()
    async film(@Args('id') id: number) {
        return await this.swapiWrapperService.findOne(this.path, id)
    }

    @Query()
    async films(@Args('page') page?: number) {
        return await this.swapiWrapperService.findAll(this.path, page);
    }
}
