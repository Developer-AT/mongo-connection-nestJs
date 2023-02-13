import { Injectable, Inject, Module } from '@nestjs/common';
import { Model } from 'mongoose';
import { IUser } from 'src/providers/schemas/users.schema';
import { Dao } from 'src/providers/database/dao.provider';
import { CreateUserDto } from 'src/modules/user/dto/user.dto';

@Injectable()
export class UserEntity extends Dao {
    constructor(@Inject('USER_MODEL') private userModel: Model<IUser>){
        super(userModel);
    }

    async getUserById(userId: string) {
        
        const user = await this.getDataById(userId);
        return user;
    }

    async createUser(createUserDto: CreateUserDto) {
        const user = await this.saveData(createUserDto)
        return user;
    }
}