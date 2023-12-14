import { Injectable } from '@nestjs/common';
import { HttpExtensionService } from 'src/http-extension/http-extension.service';

export type UrlPath = 'films' | 'people' | 'planets' | 'species' | 'starships' | 'vehicles';

@Injectable()
export class SwapiWrapperService {
    constructor(private readonly httpClient: HttpExtensionService) {}

    async findAll(path: UrlPath, page: number = 1) {
        const response = await this.httpClient.instance.get(`${path}/?page=${page}`);
        return {
            page: page,
            data: response?.data?.results
        };
    }

    async findOne(path: UrlPath, id: number) {
        const response = await this.httpClient.instance.get(`${path}/${id}`);
        return response?.data
    }
}
