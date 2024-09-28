import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommerceImageEntity } from 'apps/libs/entities/images/commerce-image.entity';
import { CommerceImagesService } from './commerce-images.service';




@Module({
  imports: [TypeOrmModule.forFeature([CommerceImageEntity])],
  providers: [CommerceImagesService],
  controllers: [],
})
export class CommerceImagesModule {}
