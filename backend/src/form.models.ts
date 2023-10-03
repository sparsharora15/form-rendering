import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';

export type formDocument = Form & Document;

@Schema()
export class Form {
  @Prop({ type: String })
  @IsNotEmpty()
  name: string;


  @Prop({ type: String })
  @IsEmail()
  email: string;

  @Prop({ type: String })
  @IsNotEmpty()
  DOB: string;

  @Prop({ type: String })
  @IsNotEmpty()
  phoneNo: string;
}

export const formSchema = SchemaFactory.createForClass(Form);
