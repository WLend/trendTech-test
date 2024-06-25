import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Name extends Document {
  @Prop({ required: true })
  name: string;
}

export const NameSchema = SchemaFactory.createForClass(Name);
