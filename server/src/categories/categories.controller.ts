import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  constructor() {}

  // We would include all subcategories as part of the categories query
  @Get()
  findAll() {
  }

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
