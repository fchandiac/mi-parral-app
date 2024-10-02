import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { ProductEntity } from '../../libs/entities/products/product.entity';
import { CreateProductDto } from '../../libs/dto/product/create-product.dto';
import { ByIdDto } from 'apps/libs/dto/common/by-id.dto';
import { UpdateProductDto } from 'apps/libs/dto/product/update-product.dto';
import { CategoryService } from '../category/category.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    private readonly categoryService: CategoryService,
  ) {}

  // Crear un nuevo producto
  async create(dto: CreateProductDto): Promise<ProductEntity> {
    const category = await this.categoryService.findOne(dto.categoryId);
    const product = this.productRepository.create(dto);
    product.category = category;
    return this.productRepository.save(product);
  }

  // Obtener todos los productos
  async findAll(): Promise<ProductEntity[]> {
    return this.productRepository.find({
      order: { createdAt: 'DESC' },
      withDeleted: false,
      relations: ['category'],
    });
  }

  // Obtener un producto por ID
  async findOne(id: string): Promise<ProductEntity> {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: ['category'],
      withDeleted: false,
    })
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  // Obtener todos los productos de un usuario
  async findAllByUserId(byIdDto: ByIdDto): Promise<ProductEntity[]> {
    return this.productRepository.find({ 
      where: { userId: byIdDto.id },
      order: { createdAt: 'DESC' },
      withDeleted: false,
      relations: ['category'],
     });
  }

  // Eliminar un producto por ID
  async remove(id: string): Promise<void> {
    const result = await this.productRepository.softDelete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
  }

  // Obtener un producto aleatorio
  async findRandom(): Promise<ProductEntity> {
    const products = await this.productRepository.find({ withDeleted: false, relations: ['category'] });
    const randomIndex = Math.floor(Math.random() * products.length);
    return products ? products[randomIndex] : null;
  }

  async update(dto: UpdateProductDto): Promise<ProductEntity> {
    const product = await this.productRepository.findOneBy({ id: dto.id });
    if (!product) {
      throw new NotFoundException(`Product with ID ${dto.id} not found`);
    }
    const updatedProduct = this.productRepository.merge(product, dto);
    return this.productRepository.save(updatedProduct);
  }

  async findAllByCategoryNameOrProductName(searchTerm: string): Promise<ProductEntity[]> {
    // Si el término de búsqueda es una cadena vacía, devuelve todos los productos
    if (!searchTerm) {
      return this.productRepository.find({
        relations: ['category'],
      });
    }
  
    // Si hay un término de búsqueda, filtra por nombre de categoría o nombre del producto
    return this.productRepository.find({
      where: [
        { category: { name: ILike(`%${searchTerm}%`) } }, // Búsqueda por nombre de categoría
        { name: ILike(`%${searchTerm}%`) },               // Búsqueda por nombre del producto
      ],
      relations: ['category'],
    });
  }
  


}


