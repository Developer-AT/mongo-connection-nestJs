import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { EntityModule } from 'src/entity/entity.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        EntityModule
    ],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}