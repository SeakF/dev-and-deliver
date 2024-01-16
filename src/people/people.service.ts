import { Injectable } from '@nestjs/common';
import { SwapiWrapperService } from '../swapi-wrapper/swapi-wrapper.service';

@Injectable()
export class PeopleService {
  constructor(private readonly swapiWrapperService: SwapiWrapperService) {}

  async getAllNamesWithoutPagination(currentPage = 1): Promise<string[]> {
    const people = await this.swapiWrapperService.findAll(
      'people',
      currentPage,
    );

    const charactersNameList = [];

    for (const character of people?.data) {
      charactersNameList.push(character.name);
    }

    if (people.isNextPage) {
      charactersNameList.push(
        ...(await this.getAllNamesWithoutPagination(++currentPage)),
      );
    }

    return charactersNameList;
  }
}
