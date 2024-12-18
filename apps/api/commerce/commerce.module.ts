import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommerceEntity } from 'apps/libs/entities/commerces/commerce.entity';
import { CommerceService } from './commerce.service';
import {CommerceController} from './commerce.controller';

import { CategoryService } from '../category/category.service';
import { CategoryEntity } from 'apps/libs/entities/categories/category.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([CommerceEntity, CategoryEntity]),
  ],
  controllers: [CommerceController],
  providers: [CommerceService, CategoryService],
  exports: [CommerceService]
})
export class CommerceModule{}

