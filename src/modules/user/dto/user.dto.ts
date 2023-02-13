import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ type: String, required: true })
    @IsString()
    name: string;

    @ApiProperty({ type: Number, required: true })
    @IsInt()
    phoneNo: number;

    @ApiProperty({ type: String, required: true })
    @IsString()
    email: string;
}

export class UpdateUserDto {
    @ApiProperty({ type: String, required: false })
    @IsString()
    name: string;

    @ApiProperty({ type: Number, required: false })
    @IsInt()
    phoneNo: number;
}