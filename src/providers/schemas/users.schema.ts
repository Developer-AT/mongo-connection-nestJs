import * as mongoose from 'mongoose';

export interface IUser extends Document {
    name: string;
    phoneNo: string;
    email: string;
}

export const UserSchema = new mongoose.Schema({
    name: String,
    phoneNo: Number,
    email: String,
});