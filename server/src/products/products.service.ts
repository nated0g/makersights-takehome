import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductQueryDto } from './dto/product-query.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>
  ) { }

  findAll(productQuery: ProductQueryDto) {
    const { limit, offset, categoryId, subcategoryId } = productQuery;

    return this.productModel
      .find({
        ...(categoryId && {categoryId}),
        ...(subcategoryId && {subcategoryId}),
      })
      .skip(offset)
      .limit(limit)
      .exec();
  }

  async findOne(id: string) {
    const product = this.productModel.findOne({ _id: id }).exec();
    if (!product) {
      throw new NotFoundException(`Product with id:${id} not found.`);
    }
    return product;
  }

  create(createProductDto: CreateProductDto) {
    const product = new this.productModel(createProductDto);
    return product.save();
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const existingProduct = await this.productModel
      .findOneAndUpdate({ _id: id }, { $set: updateProductDto }, { new: true })
      .exec();

    if (!existingProduct) {
      throw new NotFoundException(`Product with id:${id} not found.`);
    }
    return existingProduct;
  }

  async remove(id: string) {
    const product = await this.findOne(id);
    return product.remove();
  }
}
