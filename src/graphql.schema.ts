
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

    abstract uniqueWordOccurances(): Nullable<Nullable<string>[]> | Promise<Nullable<Nullable<string>[]>>;

    abstract planet(id: number): Nullable<Planet> | Promise<Nullable<Planet>>;

    abstract planets(page?: Nullable<number>): Nullable<Planets> | Promise<Nullable<Planets>>;

    abstract species(id: number): Nullable<Species> | Promise<Nullable<Species>>;

    abstract allSpecies(page?: Nullable<number>): Nullable<AllSpecies> | Promise<Nullable<AllSpecies>>;

    abstract starship(id: number): Nullable<Starship> | Promise<Nullable<Starship>>;

    abstract starships(page?: Nullable<number>): Nullable<Starships> | Promise<Nullable<Starships>>;

    abstract vehicle(id: number): Nullable<Vehicle> | Promise<Nullable<Vehicle>>;

    abstract vehicles(page?: Nullable<number>): Nullable<Vehicles> | Promise<Nullable<Vehicles>>;
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

export class Species {
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

export class AllSpecies {
    page?: Nullable<number>;
    data?: Nullable<Nullable<Species>[]>;
}

export class Starship {
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

export class Starships {
    page?: Nullable<number>;
    data?: Nullable<Nullable<Starship>[]>;
}

export class Vehicle {
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

export class Vehicles {
    page?: Nullable<number>;
    data?: Nullable<Nullable<Vehicle>[]>;
}

type Nullable<T> = T | null;
