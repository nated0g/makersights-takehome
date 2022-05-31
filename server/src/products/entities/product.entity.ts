import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Product extends Document{
  // _id created in mongo by default, not needed here
  @Prop()
  name: string;

  @Prop()
  desc: string;

  @Prop()
  price: number;

  @Prop()
  addedDate: Date;
  
  @Prop()
  img_url: string;

  @Prop()
  categoryId: number;

  @Prop()
  subcategoryId: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);