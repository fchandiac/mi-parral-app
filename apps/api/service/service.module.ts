import { Module } from '@nestjs/common';
import { ServiceController } from '../service/service.controller';
import { ServiceService } from '../service/service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceEntity } from 'apps/libs/entities/services/service.entity';
import { CategoryModule } from '../category/category.module';
import { CategoryService } from '../category/category.service';
import { CategoryEntity } from 'apps/libs/entities/categories/category.entity';


@Module({
  imports: [
    CategoryModule,
    TypeOrmModule.forFeature([ServiceEntity, CategoryEntity]),
  ],
  controllers: [ServiceController],
  providers: [ServiceService, CategoryService],
})
export class ServiceModule{}

