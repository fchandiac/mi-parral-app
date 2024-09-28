import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { unlink, access } from 'fs/promises';
import { join } from 'path';
import { ServiceImageEntity } from '../../libs/entities/images/service-image.entity';
import { UploadServiceImageDto } from 'apps/libs/dto/images/upload-service-image.dto';
import { CommerceImageEntity } from '../../libs/entities/images/commerce-image.entity';
import { UploadCommerceImageDto } from 'apps/libs/dto/images/upload-commerce-image.dto';
import { SetPrincipalServiceImageDto } from 'apps/libs/dto/images/set-principal-service-image.dto';
import { SetPrincipalCommerceImageDto } from 'apps/libs/dto/images/set-principal-commerce-image-dto';

@Injectable()
export class ImagesAppService {
  constructor(
    @InjectRepository(ServiceImageEntity)
    private readonly serviceImageRepository: Repository<ServiceImageEntity>,
    @InjectRepository(CommerceImageEntity)
    private readonly commerceImageRepository: Repository<CommerceImageEntity>,
  ) {}

  // Configuración de Multer para manejar la subida de archivos
  public static servicesStorage = diskStorage({
    destination: './dist/apps/images/services',
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const filename = `${uniqueSuffix}${extname(file.originalname)}`;
      cb(null, filename);
    },
  });

  public static commercesStorage = diskStorage({
    destination: './dist/apps/images/commerces',
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const filename = `${uniqueSuffix}${extname(file.originalname)}`;
      cb(null, filename);
    },
  });

  async uploadService(uploadServiceImageDto: UploadServiceImageDto): Promise<ServiceImageEntity> {
    const { serviceId, file } = uploadServiceImageDto;
    const newImage = this.serviceImageRepository.create({
      serviceId,
      image: file.filename,
    });

    return await this.serviceImageRepository.save(newImage);
  }

  async uploadCommerce(uploadCommerceImageDto: UploadCommerceImageDto): Promise<CommerceImageEntity> {
    const { commerceId, file } = uploadCommerceImageDto;
    const newImage = this.commerceImageRepository.create({
      commerceId,
      image: file.filename,
    });

    return await this.commerceImageRepository.save(newImage);
  }

  async findAllByServiceId(serviceId: string): Promise<ServiceImageEntity[]> {
    return this.serviceImageRepository.find({ where: { serviceId } });
  }

  async setPrincipalServiceImage(dto: SetPrincipalServiceImageDto): Promise<ServiceImageEntity> {
    const { serviceId, imageId } = dto;
    const images = await this.findAllByServiceId(serviceId);
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
      })
    );

    image.principal = true;
    return await this.serviceImageRepository.save(image);
  }

  async findPrincipalServiceImage(serviceId: string): Promise<ServiceImageEntity> {
    const image = await this.serviceImageRepository.findOne({
      where: { serviceId, principal: true },
    });

    if (!image) {
      throw new NotFoundException('Principal image not found');
    }
    return image;
  }

  async findAllByCommerceId(commerceId: string): Promise<CommerceImageEntity[]> {
    return this.commerceImageRepository.find({ where: { commerceId } });
  }

  async setPrincipalCommerceImage(dto: SetPrincipalCommerceImageDto): Promise<CommerceImageEntity> {
    const { commerceId, imageId } = dto;
    const images = await this.findAllByCommerceId(commerceId);
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

  async findPrincipalCommerceImage(commerceId: string): Promise<CommerceImageEntity> {
    const image = await this.commerceImageRepository.findOne({
      where: { commerceId, principal: true },
    });

    if (!image) {
      throw new NotFoundException('Principal image not found');
    }
    return image;
  }

  async deleteServiceImage(imageId: string): Promise<void> {
    const image = await this.serviceImageRepository.findOne({ where: { id: imageId } });
    if (!image) {
      throw new NotFoundException('Image not found');
    }

    const imagePath = join(__dirname, '../../dist/apps/images/services', image.image);

    try {
      await unlink(imagePath);
    } catch (error) {
      console.error('Error deleting file:', error);
    }

    await this.serviceImageRepository.remove(image);
  }

  async deleteCommerceImage(imageId: string): Promise<void> {
    const image = await this.commerceImageRepository.findOne({ where: { id: imageId } });
    if (!image) {
      throw new NotFoundException('Image not found');
    }

    const imagePath = join(__dirname, '../../dist/apps/images/commerces', image.image);

    try {
      await access(imagePath); 
      await unlink(imagePath);
    } catch (error) {
      console.error('Error deleting file:', error);
    }

    await this.commerceImageRepository.remove(image);
  }


}
