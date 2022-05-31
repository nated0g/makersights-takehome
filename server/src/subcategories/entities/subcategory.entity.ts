import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Category } from '../../categories/entities/category.entity'

@Schema()
export class SubCategory extends Category{
  // _id created in mongo by default, not needed here
  @Prop()
  categoryId: number;
}

export const SubCategorySchema = SchemaFactory.createForClass(SubCategory);