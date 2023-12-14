
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Film {
    title?: Nullable<string>;
    episode_id?: Nullable<number>;
    opening_crawl?: Nullable<string>;
    director?: Nullable<string>;
    producer?: Nullable<string>;
    release_date?: Nullable<string>;
    characters?: Nullable<Nullable<string>[]>;
    planets?: Nullable<Nullable<string>[]>;
    starships?: Nullable<Nullable<string>[]>;
    vehicles?: Nullable<Nullable<string>[]>;
    species?: Nullable<Nullable<string>[]>;
    created?: Nullable<string>;
    edited?: Nullable<string>;
    url?: Nullable<string>;
}

export class Films {
    page?: Nullable<number>;
    data?: Nullable<Nullable<Film>[]>;
}

export abstract class IQuery {
    abstract film(id: number): Nullable<Film> | Promise<Nullable<Film>>;

    abstract films(page?: Nullable<number>): Nullable<Films> | Promise<Nullable<Films>>;

    abstract planet(id: number): Nullable<Planet> | Promise<Nullable<Planet>>;

    abstract planets(page?: Nullable<number>): Nullable<Planets> | Promise<Nullable<Planets>>;
}

export class Planet {
    name?: Nullable<string>;
    rotation_period?: Nullable<string>;
    orbital_period?: Nullable<string>;
    diameter?: Nullable<string>;
    climate?: Nullable<string>;
    gravity?: Nullable<string>;
    terrain?: Nullable<string>;
    surface_water?: Nullable<string>;
    population?: Nullable<string>;
    residents?: Nullable<Nullable<string>[]>;
    films?: Nullable<Nullable<string>[]>;
    created?: Nullable<string>;
    edited?: Nullable<string>;
    url?: Nullable<string>;
}

export class Planets {
    page?: Nullable<number>;
    data?: Nullable<Nullable<Planet>[]>;
}

type Nullable<T> = T | null;
