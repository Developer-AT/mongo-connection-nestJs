import { UserEntity } from './../../entity/user.entity';
import { UpdateUserDto, CreateUserDto } from './dto/user.dto';
import { Injectable, Inject } from '@nestjs/common';


@Injectable()
export class UserService {
    constructor(
        private readonly userEntity: UserEntity,
    ) {}

    async getUserById(userId: string) {
        
        const user = await this.userEntity.getUserById(userId);
        return user;
    }

    async createUser(createUserDto: CreateUserDto) {
        const user = await this.userEntity.createUser(createUserDto)
        return user;
    }

    // async updateUserById(userId: string, updateUserDto: UpdateUserDto) {
    //     return await this.userModel.updateOne({ _id: userId }, updateUserDto);
    // }

    // async deleteUserById(userId: string) {
    //     return await this.userModel.deleteOne({ _id: userId });
    // }
}