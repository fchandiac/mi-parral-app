import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { ByIdDto } from 'apps/libs/dto/common/by-id.dto';
import { CreateCommerceDto } from 'apps/libs/dto/commerce/create-commerce.dto';
import { CommerceEntity } from 'apps/libs/entities/commerces/commerce.entity';
import { UpdateCommerceDto } from 'apps/libs/dto/commerce/update-commerce.dto';
import { CategoryService } from '../category/category.service';

@Injectable()
export class CommerceService {
  constructor(
    @InjectRepository(CommerceEntity)
    private readonly commerceRepository: Repository<CommerceEntity>,
    private readonly categoryService: CategoryService,
  ) {}

  // Crear un nuevo servicio
  async create(dto: CreateCommerceDto): Promise<CommerceEntity> {
    const category = await this.categoryService.findOne(dto.categoryId);
    const commerce = this.commerceRepository.create(dto);
    commerce.category = category;
    return this.commerceRepository.save(commerce);
  }

  // Obtener todos los servicios
  async findAll(): Promise<CommerceEntity[]> {
    return this.commerceRepository.find({
      order: { createdAt: 'DESC' },
      withDeleted: false,
      relations: ['category'],
    });
  }

  // Obtener un servicio por ID
  async findOne(id: string): Promise<CommerceEntity> {
    const commerce = await this.commerceRepository.findOne({
      where: { id },
      relations: ['category'],
    });
    if (!commerce) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
    return commerce;
  }

  async findAllByCategoryNameOrCommerceName(
    searchTerm: string,
  ): Promise<CommerceEntity[]> {
    if (!searchTerm) {
      return this.commerceRepository.find({
        relations: ['category'],
      });
    }
    return this.commerceRepository.find({
      where: [
        { category: { name: ILike(`%${searchTerm}%`) } },
        { name: ILike(`%${searchTerm}%`) },
      ],
      relations: ['category'],
    });
  }

  async findAllByUserId(dto: ByIdDto): Promise<CommerceEntity[]> {
    const commerces = await this.commerceRepository.find({
      where: { userId: dto.id },
      order: { createdAt: 'DESC' },
      relations: ['category'], // Asumiendo que tienes un campo 'createdAt' para la fecha de creación
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
    const commerce = await this.commerceRepository.find({
      withDeleted: false,
      relations: ['category'],
    });
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

  async findOneById(dto: ByIdDto): Promise<CommerceEntity> {
    const commerce = await this.commerceRepository.findOne({
      where: { id: dto.id },
    });
    if (!commerce) {
      throw new NotFoundException(`Commerce with ID ${dto.id} not found`);
    }
    return commerce;
  }
}

// Eliminar un servicio por ID
