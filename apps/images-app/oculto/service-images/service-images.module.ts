import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceImagesService } from './service-images.service';
import { ServiceImageEntity } from '../../../libs/entities/images/service-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceImageEntity])],
  providers: [ServiceImagesService],
  controllers: [],
})
export class ServiceImagesModule {}
