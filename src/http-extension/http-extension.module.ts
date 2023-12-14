import { Module, Logger } from '@nestjs/common';
import { HttpExtensionService } from './http-extension.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: async () => ({
        baseURL: 'https://swapi.dev/api/', // replace later with env value
      })
    })
  ],
  providers: [HttpExtensionService, Logger],
  exports: [HttpExtensionService]
})
export class HttpExtensionModule {}
