import { Type } from "class-transformer";
import { IsDate, IsDateString, IsISO8601, IsNumber, IsRFC3339, IsString, IsUrl } from "class-validator";

export class CreateProductDto {

  @IsString()
  readonly name: string;

  @IsString()
  readonly desc: string;

  @Type(() => Date)
  @IsDate()
  readonly addedDate: Date;

  @IsNumber()
  readonly price: number;
  
  @IsUrl()
  readonly img_url: string;

  @IsNumber()
  readonly categoryId: number;

  @IsNumber()
  readonly subcategoryId: number;
}