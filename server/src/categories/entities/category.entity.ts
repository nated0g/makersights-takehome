import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Category extends Document {
  // _id created in mongo by default, not needed here
  @Prop()
  name: string;

  @Prop()
  desc: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);