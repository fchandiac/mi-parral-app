import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommerceImageEntity } from '../../../libs/entities/images/commerce-image.entity';

@Injectable()
export class CommerceImagesService {
  constructor(
    @InjectRepository(CommerceImageEntity)
    private readonly commerceImageRepository: Repository<CommerceImageEntity>,
  ) {}

  async create(commerceId: string, imagePath: string): Promise<CommerceImageEntity> {
    const newImage = this.commerceImageRepository.create({
      commerceId,
      image: imagePath,
    });
    return this.commerceImageRepository.save(newImage);
  }

  async findByCommerceId(commerceId: string): Promise<CommerceImageEntity[]> {
    return this.commerceImageRepository.find({
      where: { commerceId },
    });
  }

  async remove(imageId: string): Promise<void> {
    await this.commerceImageRepository.delete(imageId);
  }
}
