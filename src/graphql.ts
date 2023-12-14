
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Film {
    title?: Nullable<string>;
    episodeId?: Nullable<number>;
    openingCrawl?: Nullable<string>;
    director?: Nullable<string>;
    producer?: Nullable<string>;
    releaseDate?: Nullable<string>;
    characters?: Nullable<Nullable<string>[]>;
    planets?: Nullable<Nullable<string>[]>;
    starships?: Nullable<Nullable<string>[]>;
    vehicles?: Nullable<Nullable<string>[]>;
    species?: Nullable<Nullable<string>[]>;
    created?: Nullable<string>;
    edited?: Nullable<string>;
    url?: Nullable<string>;
}

export interface Films {
    page?: Nullable<number>;
    data?: Nullable<Nullable<Film>[]>;
}

export interface IQuery {
    film(id: number): Nullable<Film> | Promise<Nullable<Film>>;
    films(page?: Nullable<number>): Nullable<Films> | Promise<Nullable<Films>>;
}

type Nullable<T> = T | null;
