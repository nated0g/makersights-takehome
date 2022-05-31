import { IsOptional, IsPositive } from "class-validator";
import { PaginationQueryDto } from "../../common/dto/pagination-query.dto";

export class ProductQueryDto extends PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  categoryId: number;

  @IsOptional()
  @IsPositive()
  subcategoryId: number
}