import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
@Injectable()
export class ConfigAppService {
  constructor(private nestConfigService: NestConfigService) {}

  get<T extends string | number = string>(key: string, defaultValue?: T): T {
    return this.nestConfigService.get<T>(key, defaultValue);
  }
}
