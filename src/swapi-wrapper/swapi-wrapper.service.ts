import { Inject, Injectable } from '@nestjs/common';
import { HttpExtensionService } from '../http-extension/http-extension.service';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

export type UrlPath = 'films' | 'people' | 'planets' | 'species' | 'starships' | 'vehicles';

type CachedObject = {
    page: number;
    data: any;
    isNextPage: any;
};

@Injectable()
export class SwapiWrapperService {
    private ttl = 60 * 60 * 24;

    constructor(
        @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
        private readonly httpClient: HttpExtensionService
    ) {}
        
    async findAll(path: UrlPath, page: number = 1) {
        const freshData = await this.cacheManager.get(`${path}:${page}`);
        if (freshData) {
            return freshData as CachedObject;
        }

        const response = await this.httpClient.instance.get(`${path}/?page=${page}`);

        this.cacheManager.set(`${path}:${page}`, {
            page: page,
            data: response.data?.results,
            isNextPage: response.data?.next,
        }, this.ttl);

        return {
            page: page,
            data: response.data?.results,
            isNextPage: response.data?.next,
        };
    }

    async findOne(path: UrlPath, id: number) {
        const freshData = await this.cacheManager.get(`${path}:${id}`);
        if (freshData) {
            return freshData as Record<string, any>;
        }
        
        const response = await this.httpClient.instance.get(`${path}/${id}`);

        this.cacheManager.set(`${path}:${id}`, response.data, this.ttl);

        return response.data;
    }
}
