import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { unlink, access } from 'fs/promises';
import { CommerceImageEntity } from '../../libs/entities/images/commerce-image.entity';
import { UploadCommerceImageDto } from 'apps/libs/dto/images/upload-commerce-image.dto';
import { SetPrincipalCommerceImageDto } from 'apps/libs/dto/images/set-principal-commerce-image-dto';
import { envs } from 'apps/libs/config';

const ImagesDir = join(__dirname, '../../../../storageMiParral/images/commerces');

@Injectable()
export class CommerceService {
  constructor(
    @InjectRepository(CommerceImageEntity)
    private readonly commerceImageRepository: Repository<CommerceImageEntity>,
  ) {}

  // Configuración de Multer para manejar la subida de archivos
  public static storage = diskStorage({
    destination: ImagesDir,
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const filename = `${uniqueSuffix}${extname(file.originalname)}`;
      cb(null, filename);
    },
  });

  async upload(dto: UploadCommerceImageDto): Promise<CommerceImageEntity> {
    const { commerceId, file } = dto;
    const newImage = this.commerceImageRepository.create({
      commerceId,
      image: file.filename,
    });

    return await this.commerceImageRepository.save(newImage);
  }

  async findAllById(commerceId: string): Promise<CommerceImageEntity[]> {
    return this.commerceImageRepository.find({ where: { commerceId } });
  }

  async setPrincipalCommerceImage(dto: SetPrincipalCommerceImageDto): Promise<CommerceImageEntity> {
    const { commerceId, imageId } = dto;
    const images = await this.findAllById(commerceId);
    const image = images.find((img) => img.id === imageId);

    if (!image) {
      throw new NotFoundException('Image not found');
    }

    await Promise.all(
      images.map(async (img) => {
        if (img.principal) {
          img.principal = false;
          await this.commerceImageRepository.save(img);
        }
      })
    );

    image.principal = true;
    return await this.commerceImageRepository.save(image);
  }

  async findPrincipalImage(commerceId: string): Promise<CommerceImageEntity> {
    const image = await this.commerceImageRepository.findOne({
      where: { commerceId, principal: true },
    });

    if (!image) {
      return {
        id: null,
        commerceId,
        image: envs.images.defaultImageUrl,
        principal: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }
    return image;
  }

  async deleteImage(imageId: string): Promise<void> {
    const image = await this.commerceImageRepository.findOne({ where: { id: imageId } });
    if (!image) {
      throw new NotFoundException('Image not found');
    }

    const imagePath = join(ImagesDir, image.image);

    try {
      await access(imagePath);
      await unlink(imagePath);
    } catch (error) {
      console.error('Error deleting file:', error);
    }

    await this.commerceImageRepository.remove(image);
  }
}
