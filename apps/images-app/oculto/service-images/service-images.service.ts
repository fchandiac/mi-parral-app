import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceImageEntity } from '../../../libs/entities/images/service-image.entity';

@Injectable()
export class ServiceImagesService {
  constructor(
    @InjectRepository(ServiceImageEntity)
    private readonly serviceImageRepository: Repository<ServiceImageEntity>,
  ) {}

  // Crear una nueva imagen asociada a un servicio
  async create(serviceId: string, imagePath: string): Promise<ServiceImageEntity> {
    const newImage = this.serviceImageRepository.create({
      serviceId,
      image: imagePath,
    });
    return this.serviceImageRepository.save(newImage);
  }

  // Obtener todas las imágenes de un servicio por serviceId
  async findByServiceId(serviceId: string): Promise<ServiceImageEntity[]> {
    return this.serviceImageRepository.find({
      where: { serviceId },
    });
  }

  // Eliminar una imagen (opcional)
  async remove(imageId: string): Promise<void> {
    await this.serviceImageRepository.delete(imageId);
  }
}
