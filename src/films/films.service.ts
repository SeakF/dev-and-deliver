import { Injectable } from '@nestjs/common';
import { SwapiWrapperService } from '../swapi-wrapper/swapi-wrapper.service';

@Injectable()
export class FilmsService {
    constructor(private readonly swapiWrapperService: SwapiWrapperService) {}

    async countWordsInOpeningCrawl(): Promise<string[]> {
        const allOpeningCrawls = await this.getAllOpeningCrawls();
        
        const parsedOpeningCrawls = this.parseOpeningCrawls(allOpeningCrawls);
        
        const uniqueWordOccurances = this.countWords(parsedOpeningCrawls);
        
        return uniqueWordOccurances;
    }

    private async getAllOpeningCrawls(currentPage: number = 1): Promise<string[]> {
        const films = await this.swapiWrapperService.findAll('films', currentPage);

        const openingCrawlArrayFromAllFilms = []

        for (const film of films?.data) {
            openingCrawlArrayFromAllFilms.push(film.opening_crawl);
        }

        if (films.isNextPage) {
            openingCrawlArrayFromAllFilms.push(...await this.getAllOpeningCrawls(++currentPage));
        }

        return openingCrawlArrayFromAllFilms;
    }

    private parseOpeningCrawls(openingCrawls: string[]) {
        const parsedOpeningCrawls = [];

        for (const openingCrawl of openingCrawls) {
            const parsed = openingCrawl.replace(/\r\n|\r|\n/g, ' ');

            parsedOpeningCrawls.push(parsed);
        }

        return parsedOpeningCrawls;
    }

    private countWords(parsedOpeningCrawls: string[]) {
        const uniqueWordsCount: Record<string, number> = {};

        for (const parsedOpeningCrawl of parsedOpeningCrawls) {
            const words = parsedOpeningCrawl.split(/\s+/);
            
            for (const word of words) {
                const clearWordFromPunctuation = word.replace(/[.,!?;:'"(){}\[\]\-]+$/, '').trim();
                
                if (uniqueWordsCount[clearWordFromPunctuation.toLowerCase()]) {
                    uniqueWordsCount[clearWordFromPunctuation.toLowerCase()]++;
                } else {
                    uniqueWordsCount[clearWordFromPunctuation.toLowerCase()] = 1;
                }
            }
        }
        
        return this.parseToArray(uniqueWordsCount);
    }

    private parseToArray(uniqueWordsCount: Record<string, number>) {
        const arrayFromObject = []
        for (const word in uniqueWordsCount) {
            arrayFromObject.push(`${word} ${uniqueWordsCount[word]}`);
        }

        return arrayFromObject;
    }
}
