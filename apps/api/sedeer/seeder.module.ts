import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from 'apps/libs/entities/categories/category.entity';
import { CategorySeederService } from '../category/category-seeder.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  providers: [CategorySeederService],
  exports: [CategorySeederService],
})
export class SeederModule {}
