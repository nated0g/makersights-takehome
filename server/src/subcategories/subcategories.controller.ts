import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  constructor() {}

  // Would take parent category, and subcategory name as parameters
  @Post()
  create() {
  }

  @Patch(':id')
  update() {
  }

  @Delete(':id')
  remove() {
  }
}
