import { Module } from '@nestjs/common';
import { SwapiWrapperService } from './swapi-wrapper.service';
import { HttpExtensionModule } from '../http-extension/http-extension.module';

@Module({
  imports: [HttpExtensionModule],
  providers: [SwapiWrapperService],
  exports: [SwapiWrapperService]
})
export class SwapiWrapperModule {}
