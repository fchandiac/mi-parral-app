import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceEntity } from '../../libs/entities/services/service.entity'; // Asegúrate de importar correctamente la entidad
import { CreateServiceDto } from '../../libs/dto/service/create-service.dto'
import { ByIdDto } from 'apps/libs/dto/common/by-id.dto';
import { UpdateServiceDto } from 'apps/libs/dto/service/update-service.dto';
// import { UpdateServiceDto } from './update-service.dto'; // DTO para actualizar servicio

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(ServiceEntity)
    private readonly serviceRepository: Repository<ServiceEntity>,
  ) {}

  // Crear un nuevo servicio
  async create(createServiceDto: CreateServiceDto): Promise<ServiceEntity> {
    const service = this.serviceRepository.create(createServiceDto);
    return this.serviceRepository.save(service);
  }

  // Obtener todos los servicios
  async findAll(): Promise<ServiceEntity[]> {
    return this.serviceRepository.find({
      order: { createdAt: 'DESC' },
      withDeleted: false,
    });
  }

  // Obtener un servicio por ID
  async findOne(id: string): Promise<ServiceEntity> {
    const service = await this.serviceRepository.findOneBy({ id });
    if (!service) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
    return service;
  }

  async findAllByUserId(byIdDto: ByIdDto): Promise<ServiceEntity[]> {
    const services = await this.serviceRepository.find({ where: { userId: byIdDto.id } });
    return services;

  }

  async remove(id: string): Promise<void> {
    const result = await this.serviceRepository.softDelete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
  }

  async findRandom(): Promise<ServiceEntity> {
    const services = await this.serviceRepository.find({ withDeleted: false });
    const randomIndex = Math.floor(Math.random() * services.length);
    return services ? services[randomIndex] : null;
  }

  async update(dto: UpdateServiceDto): Promise<ServiceEntity> {
    const service = await this.serviceRepository.findOneBy({ id: dto.id });
    if (!service) {
      throw new NotFoundException(`Service with ID ${dto.id} not found`);
    }
    const updatedService = this.serviceRepository.merge(service, dto);
    return this.serviceRepository.save(updatedService);
  }

}




