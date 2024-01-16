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

export interface UniqueWordOccurancesAndMostPopularCharacters {
    mostPopularCharacters?: Nullable<Nullable<string>[]>;
    uniqueWordOccurances?: Nullable<Nullable<string>[]>;
}

export interface IQuery {
    film(id: number): Nullable<Film> | Promise<Nullable<Film>>;
    films(page?: Nullable<number>): Nullable<Films> | Promise<Nullable<Films>>;
    uniqueWordOccurancesAndMostPopularCharacters(): Nullable<UniqueWordOccurancesAndMostPopularCharacters> | Promise<Nullable<UniqueWordOccurancesAndMostPopularCharacters>>;
    planet(id: number): Nullable<Planet> | Promise<Nullable<Planet>>;
    planets(page?: Nullable<number>): Nullable<Planets> | Promise<Nullable<Planets>>;
    species(id: number): Nullable<Species> | Promise<Nullable<Species>>;
    allSpecies(page?: Nullable<number>): Nullable<AllSpecies> | Promise<Nullable<AllSpecies>>;
    starship(id: number): Nullable<Starship> | Promise<Nullable<Starship>>;
    starships(page?: Nullable<number>): Nullable<Starships> | Promise<Nullable<Starships>>;
    vehicle(id: number): Nullable<Vehicle> | Promise<Nullable<Vehicle>>;
    vehicles(page?: Nullable<number>): Nullable<Vehicles> | Promise<Nullable<Vehicles>>;
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

export interface Starship {
    name?: Nullable<string>;
    model?: Nullable<string>;
    manufacturer?: Nullable<string>;
    cost_in_credits?: Nullable<string>;
    length?: Nullable<string>;
    max_atmosphering_speed?: Nullable<string>;
    crew?: Nullable<string>;
    passengers?: Nullable<string>;
    cargo_capacity?: Nullable<string>;
    consumables?: Nullable<string>;
    hyperdrive_rating?: Nullable<string>;
    MGLT?: Nullable<string>;
    starship_class?: Nullable<string>;
    films?: Nullable<Nullable<string>[]>;
    created?: Nullable<string>;
    edited?: Nullable<string>;
    url?: Nullable<string>;
}

export interface Starships {
    page?: Nullable<number>;
    data?: Nullable<Nullable<Starship>[]>;
}

export interface Vehicle {
    name?: Nullable<string>;
    model?: Nullable<string>;
    manufacturer?: Nullable<string>;
    cost_in_credits?: Nullable<string>;
    length?: Nullable<string>;
    max_atmosphering_speed?: Nullable<string>;
    crew?: Nullable<string>;
    passengers?: Nullable<string>;
    cargo_capacity?: Nullable<string>;
    consumables?: Nullable<string>;
    vehicle_class?: Nullable<string>;
    pilots?: Nullable<Nullable<string>[]>;
    films?: Nullable<Nullable<string>[]>;
    created?: Nullable<string>;
    edited?: Nullable<string>;
    url?: Nullable<string>;
}

export interface Vehicles {
    page?: Nullable<number>;
    data?: Nullable<Nullable<Vehicle>[]>;
}

type Nullable<T> = T | null;
