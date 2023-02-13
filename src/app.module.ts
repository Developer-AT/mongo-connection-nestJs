import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './providers/database/db.module';
import { schemaProviders } from './providers/schemas/schema.provider';

@Module({
  imports: [
    DatabaseModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService, ...schemaProviders],
})
export class AppModule {}
