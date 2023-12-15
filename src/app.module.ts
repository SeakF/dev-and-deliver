import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
// import { CacheModule } from '@nestjs/cache-manager';
// import type { RedisClientOptions } from 'redis';
// import { redisStore } from 'cache-manager-redis-yet';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { FilmsModule } from './films/films.module';
import { SpeciesModule } from './species/species.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { StarshipsModule } from './starships/starships.module';
import { PlanetsModule } from './planets/planets.module';
import { SwapiWrapperModule } from './swapi-wrapper/swapi-wrapper.module';
import { HttpExtensionModule } from './http-extension/http-extension.module';
import { PeopleModule } from './people/people.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      }
    }),
    // CacheModule.register<RedisClientOptions>({
    //   store: redisStore,
    //   isGlobal: true,
    //   ttl: 60 * 60 * 24,
    //   url: 'redis://cache:6379' // replace it later with env value
    // }),
    FilmsModule,
    SpeciesModule,
    VehiclesModule,
    StarshipsModule,
    PlanetsModule,
    SwapiWrapperModule,
    HttpExtensionModule,
    PeopleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
