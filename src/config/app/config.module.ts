import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigAppService } from './config.service';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [ConfigAppService],
})
export class ConfigAppModule {}
