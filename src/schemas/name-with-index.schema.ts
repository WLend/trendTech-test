import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class NameWithIndex extends Document {
  @Prop({ required: true, index: true })
  name: string;
}

export const NameWithIndexSchema = SchemaFactory.createForClass(NameWithIndex);
