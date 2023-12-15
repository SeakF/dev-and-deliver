import { Injectable } from '@nestjs/common';
import { SwapiWrapperService } from '../swapi-wrapper/swapi-wrapper.service';
import { PeopleService } from '../people/people.service';

@Injectable()
export class FilmsService {
    constructor(
        private readonly swapiWrapperService: SwapiWrapperService,
        private readonly peopleService: PeopleService
    ) {}

    async findMostPopularCharacterInOpenings() {
        const allOpeningCrawls = await this.getAllOpeningCrawls();
        const parsedOpeningCrawls = this.parseOpeningCrawls(allOpeningCrawls);
        
        const characterNames = await this.peopleService.getAllNamesWithoutPagination();

        return this.findMatchingNames(characterNames, parsedOpeningCrawls);
    }

    async countWordsInOpeningCrawl(): Promise<string[]> {
        const allOpeningCrawls = await this.getAllOpeningCrawls();
        const parsedOpeningCrawls = this.parseOpeningCrawls(allOpeningCrawls);
        
        const uniqueWordOccurances = this.countWords(parsedOpeningCrawls);
        
        return this.parseToArray(uniqueWordOccurances);
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
        
        return uniqueWordsCount;
    }

    private parseToArray(uniqueWordsCount: Record<string, number>) {
        const arrayFromObject = []
        for (const word in uniqueWordsCount) {
            arrayFromObject.push(`${word} ${uniqueWordsCount[word]}`);
        }

        return arrayFromObject;
    }

    private findMatchingNames(names: string[], parsedOpeningCrawls: string[]) {
        const occurrences: Record<string, number> = {};

        for (const name of names) {
            const regex = new RegExp(`\\b${name}\\b`, 'gi');
    
            for (const openingCrawl of parsedOpeningCrawls) {
                const matches = openingCrawl.match(regex);
    
                if (matches) {
                    occurrences[name] = (occurrences[name] || 0) + matches.length;
                }
            }
        }

        const mostOccurrences = Math.max(...Object.values(occurrences));
        const resultNames = Object.keys(occurrences).filter(name => occurrences[name] == mostOccurrences);
    
        return resultNames;
    }
}
