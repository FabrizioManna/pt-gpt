import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { ConfigAppModule } from './config/app/config.module';
import { SqliteModule } from './config/database/sqlite/sqlite.module';

@Module({
  imports: [ConfigAppModule, SqliteModule, AuthenticationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
