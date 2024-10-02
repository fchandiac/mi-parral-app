import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { unlink } from 'fs/promises';
import { ServiceImageEntity } from '../../libs/entities/images/service-image.entity';
import { UploadServiceImageDto } from 'apps/libs/dto/images/upload-service-image.dto';
import { SetPrincipalServiceImageDto } from 'apps/libs/dto/images/set-principal-service-image.dto';
import { envs } from 'apps/libs/config';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(ServiceImageEntity)
    private readonly serviceImageRepository: Repository<ServiceImageEntity>,
  ) {}

  // Configuración de Multer para manejar la subida de archivos
  public static storage = diskStorage({
    destination: './dist/apps/images/services',
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const filename = `${uniqueSuffix}${extname(file.originalname)}`;
      cb(null, filename);
    },
  });

  async upload(
    uploadServiceImageDto: UploadServiceImageDto,
  ): Promise<ServiceImageEntity> {
    const { serviceId, file } = uploadServiceImageDto;
    const newImage = this.serviceImageRepository.create({
      serviceId,
      image: file.filename,
    });

    return await this.serviceImageRepository.save(newImage);
  }

  async findAllById(serviceId: string): Promise<ServiceImageEntity[]> {
    return this.serviceImageRepository.find({ where: { serviceId } });
  }

  async setPrincipalImage(
    dto: SetPrincipalServiceImageDto,
  ): Promise<ServiceImageEntity> {
    const { serviceId, imageId } = dto;
    const images = await this.findAllById(serviceId);
    const image = images.find((img) => img.id === imageId);

    if (!image) {
      throw new NotFoundException('Image not found');
    }

    await Promise.all(
      images.map(async (img) => {
        if (img.principal) {
          img.principal = false;
          await this.serviceImageRepository.save(img);
        }
      }),
    );

    image.principal = true;
    return await this.serviceImageRepository.save(image);
  }

  async findPrincipalImage(serviceId: string): Promise<ServiceImageEntity> {
    const image = await this.serviceImageRepository.findOne({
      where: { serviceId, principal: true },
    });

    if (!image) {
      return {
        id: null,
        serviceId,
        image: envs.images.defaultImageUrl,
        principal: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }
    return image;
   
  }

  async deleteImage(imageId: string): Promise<void> {
    const image = await this.serviceImageRepository.findOne({
      where: { id: imageId },
    });
    if (!image) {
      throw new NotFoundException('Image not found');
    }

    const imagePath = join(
      __dirname,
      '../../dist/apps/images/services',
      image.image,
    );

    try {
      await unlink(imagePath);
    } catch (error) {
      console.error('Error deleting file:', error);
    }

    await this.serviceImageRepository.remove(image);
  }
}
