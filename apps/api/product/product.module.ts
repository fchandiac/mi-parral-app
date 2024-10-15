import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'apps/libs/entities/products/product.entity';

import { CategoryService } from '../category/category.service';
import { CategoryEntity } from 'apps/libs/entities/categories/category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity, CategoryEntity]),
  ],
  controllers: [ProductController],
  providers: [ProductService, CategoryService],
})
export class ProductModule {}
