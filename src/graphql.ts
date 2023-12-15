
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Film {
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

export interface Films {
    page?: Nullable<number>;
    data?: Nullable<Nullable<Film>[]>;
}

export interface IQuery {
    film(id: number): Nullable<Film> | Promise<Nullable<Film>>;
    films(page?: Nullable<number>): Nullable<Films> | Promise<Nullable<Films>>;
    planet(id: number): Nullable<Planet> | Promise<Nullable<Planet>>;
    planets(page?: Nullable<number>): Nullable<Planets> | Promise<Nullable<Planets>>;
    species(id: number): Nullable<Species> | Promise<Nullable<Species>>;
    allSpecies(page?: Nullable<number>): Nullable<AllSpecies> | Promise<Nullable<AllSpecies>>;
}

export interface Planet {
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

export interface Planets {
    page?: Nullable<number>;
    data?: Nullable<Nullable<Planet>[]>;
}

export interface Species {
    name?: Nullable<string>;
    classification?: Nullable<string>;
    designation?: Nullable<string>;
    average_height?: Nullable<string>;
    skin_colors?: Nullable<string>;
    hair_colors?: Nullable<string>;
    eye_colors?: Nullable<string>;
    average_lifespan?: Nullable<string>;
    homeworld?: Nullable<string>;
    language?: Nullable<string>;
    people?: Nullable<Nullable<string>[]>;
    films?: Nullable<Nullable<string>[]>;
    created?: Nullable<string>;
    edited?: Nullable<string>;
    url?: Nullable<string>;
}

export interface AllSpecies {
    page?: Nullable<number>;
    data?: Nullable<Nullable<Species>[]>;
}

type Nullable<T> = T | null;
