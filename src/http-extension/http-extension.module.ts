import { Module, Logger } from '@nestjs/common';
import { HttpExtensionService } from './http-extension.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://swapi.dev/api/',
    }),
  ],
  providers: [HttpExtensionService, Logger],
  exports: [HttpExtensionService],
})
export class HttpExtensionModule {}
