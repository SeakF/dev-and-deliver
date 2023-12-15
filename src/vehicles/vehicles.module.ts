import { Module } from '@nestjs/common';
import { SwapiWrapperModule } from '../swapi-wrapper/swapi-wrapper.module';
import { VehiclesResolver } from './vehicles.resolver';

@Module({
  imports: [SwapiWrapperModule],
  providers: [VehiclesResolver]
})
export class VehiclesModule {}
