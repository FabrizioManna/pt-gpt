import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { User } from './entity/user.entity';
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}
