import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Like, Repository } from 'typeorm';
import { ServiceEntity } from '../../libs/entities/services/service.entity'; // Asegúrate de importar correctamente la entidad
import { CreateServiceDto } from '../../libs/dto/service/create-service.dto';
import { ByIdDto } from 'apps/libs/dto/common/by-id.dto';
import { UpdateServiceDto } from 'apps/libs/dto/service/update-service.dto';
import { CategoryService } from '../category/category.service';
// import { UpdateServiceDto } from './update-service.dto'; // DTO para actualizar servicio

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(ServiceEntity)
    private readonly serviceRepository: Repository<ServiceEntity>,
    private readonly categoryService: CategoryService,
  ) {}

  // Crear un nuevo servicio
  async create(dto: CreateServiceDto): Promise<ServiceEntity> {
    const category = await this.categoryService.findOne(dto.categoryId);
    if (!category) {
      throw new Error('Categoría no encontrada');
    }

    // Crear una instancia de ServiceEntity
    const service = new ServiceEntity();
    service.name = dto.name;
    service.description = dto.description;
    service.price = dto.price;
    service.userId = dto.userId;
    service.whatsapp = dto.whatsapp || null;
    service.category = category; // Asociar la categoría

    // Guardar el nuevo servicio en la base de datos
    return this.serviceRepository.save(service);
  }

  // Obtener todos los servicios
  async findAll(): Promise<ServiceEntity[]> {
    return this.serviceRepository.find({
      order: { createdAt: 'DESC' },
      withDeleted: false,
      relations: ['category'],
    });
  }

  //FindAllByCategoryName
  async findAllByCategoryName(name: string): Promise<ServiceEntity[]> {
    if (name === '') {
      return this.serviceRepository.find({
        order: { createdAt: 'DESC' },
        withDeleted: false,
        relations: ['category'],
      });
    } else {
      return this.serviceRepository.find({
        where: { category: { name } },
        relations: ['category'],
      });
    }
  }

  async findAllByName(name: string): Promise<ServiceEntity[]> {
    return this.serviceRepository.find({
      where: { name: name },
      relations: ['category'],
    });
  }

  // FindAllByCategoryNameOrServiceName

  async findAllByCategoryNameOrServiceName(searchTerm: string): Promise<ServiceEntity[]> {
    // Si el término de búsqueda es una cadena vacía, devuelve todos los servicios
    if (!searchTerm) {
      return this.serviceRepository.find({
        relations: ['category'],
      });
    }
  
    // Si hay un término de búsqueda, filtra por nombre de categoría o nombre del servicio
    return this.serviceRepository.find({
      where: [
        { category: { name: ILike(`%${searchTerm}%`) } }, // Sensible a mayúsculas
        { name: ILike(`%${searchTerm}%`) },               // Sensible a mayúsculas
      ],
      relations: ['category'],
    });
  }
  

  // Obtener un servicio por ID
  async findOne(id: string): Promise<ServiceEntity> {
    const service = await this.serviceRepository.findOne({
      where: { id },
      relations: ['category'],
      withDeleted: false,
    })
    
    if (!service) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
    return service;
  }

  async findAllByUserId(byIdDto: ByIdDto): Promise<ServiceEntity[]> {
    const services = await this.serviceRepository.find({
      where: { userId: byIdDto.id },
      relations: ['category'],
    });
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
