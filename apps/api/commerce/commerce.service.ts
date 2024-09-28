import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ByIdDto } from 'apps/libs/dto/common/by-id.dto';
import { CreateCommerceDto } from 'apps/libs/dto/commerce/create-commerce.dto';
import { CommerceEntity } from 'apps/libs/entities/commerces/commerce.entity';
import { UpdateCommerceDto } from 'apps/libs/dto/commerce/update-commerce.dto';

@Injectable()
export class CommerceService {
  constructor(
    @InjectRepository(CommerceEntity)
    private readonly commerceRepository: Repository<CommerceEntity>,
  ) {}

  // Crear un nuevo servicio
  async create( dto:  CreateCommerceDto): Promise<CommerceEntity> {
    const commerce = this.commerceRepository.create(dto);
    return this.commerceRepository.save(commerce);
  }

  // Obtener todos los servicios
  async findAll(): Promise<CommerceEntity[]> {
    return this.commerceRepository.find({
      order: { createdAt: 'DESC' },
      withDeleted: false,
    });
  }

  // Obtener un servicio por ID
  async findOne(id: string): Promise<CommerceEntity> {
    const commerce = await this.commerceRepository.findOneBy({ id });
    if (!commerce) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
    return commerce;
  }

  async findAllByUserId(dto: ByIdDto): Promise<CommerceEntity[]> {
    const commerces = await this.commerceRepository.find({
      where: { userId: dto.id },
      order: { createdAt: 'DESC' }, // Asumiendo que tienes un campo 'createdAt' para la fecha de creación
    });
    return commerces;
  }

  async remove(id: string): Promise<void> {
    const result = await this.commerceRepository.softDelete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
  }

  async findRandom(): Promise<CommerceEntity> {
    const commerce = await this.commerceRepository.find({ withDeleted: false });
    const randomIndex = Math.floor(Math.random() * commerce.length);
    return commerce ? commerce[randomIndex] : null;
  }

 async update(dto: UpdateCommerceDto): Promise<CommerceEntity> {
  const commerce = await this.commerceRepository.findOneBy({ id: dto.id });
  if (!commerce) {
    throw new NotFoundException(`Commerce with ID ${dto.id} not found`);
  }
  const updatedCommerce = this.commerceRepository.merge(commerce, dto);
  return this.commerceRepository.save(updatedCommerce);
 }
}



 

  // Eliminar un servicio por ID