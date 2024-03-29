import { Test, TestingModule } from '@nestjs/testing';
import { HttpExtensionService } from './http-extension.service';
import { HttpModule } from '@nestjs/axios';
import { Logger } from '@nestjs/common';

describe('HttpExtensionService', () => {
  let service: HttpExtensionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.registerAsync({
          useFactory: async () => ({
            baseURL: 'https://swapi.dev/api/',
          }),
        }),
      ],
      providers: [HttpExtensionService, Logger],
      exports: [HttpExtensionService],
    }).compile();

    service = module.get<HttpExtensionService>(HttpExtensionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
