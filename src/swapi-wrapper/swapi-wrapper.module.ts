import { Module } from '@nestjs/common';
import { SwapiWrapperService } from './swapi-wrapper.service';
import { HttpExtensionModule } from 'src/http-extension/http-extension.module';

@Module({
  imports: [HttpExtensionModule],
  providers: [SwapiWrapperService]
})
export class SwapiWrapperModule {}
