import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Dao } from './dao.provider';
import { databaseProviders } from './db.provider';

@Module({
    imports: [ConfigModule.forRoot()],
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule {}