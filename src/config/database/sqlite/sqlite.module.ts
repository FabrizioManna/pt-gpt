import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
        TypeOrmModule.forRoot({
            type :"sqlite",
            database: `${__dirname}/db.sqlite`,
            synchronize: true
        })
    ]
})
export class SqliteModule {}
