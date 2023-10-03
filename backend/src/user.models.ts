import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { IsNotEmpty } from 'class-validator';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({type: String, required: true, unique: true})
  @IsNotEmpty()
  username: string;

  @Prop({type:mongoose.Schema.Types.ObjectId , ref:"userForm"})
  form: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
