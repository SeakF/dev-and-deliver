import { Module } from '@nestjs/common';
import { SwapiWrapperService } from './swapi-wrapper.service';
import { HttpExtensionModule } from '../http-extension/http-extension.module';
import { CacheModule } from '@nestjs/cache-manager';
import mongoStore from 'cache-manager-mongodb';

@Module({
  imports: [
    HttpExtensionModule,
    CacheModule.registerAsync({
      useFactory: () => ({
        store: mongoStore,
        uri: 'mongodb://root:pass@cache:27017/dev_and_deliver',
        options: {
          collection: 'cacheManager',
          compression: false,
          poolSize: 5,
          autoReconnect: true,
        },
      }),
    }),
  ],
  providers: [SwapiWrapperService],
  exports: [SwapiWrapperService],
})
export class SwapiWrapperModule {}
