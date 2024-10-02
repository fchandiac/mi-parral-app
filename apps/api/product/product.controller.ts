import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { ProductService } from './product.service'; 
import { CreateProductDto } from '../../libs/dto/product/create-product.dto';
import { ProductEntity } from '../../libs/entities/products/product.entity';
import { ByIdDto } from '../../libs/dto/common/by-id.dto';
import { UpdateProductDto } from 'apps/libs/dto/product/update-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // Crear un nuevo producto
  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<ProductEntity> {
    return this.productService.create(createProductDto);
  }

  // Obtener todos los productos
  @Get()
  async findAll(): Promise<ProductEntity[]> {
    return this.productService.findAll();
  }

  // Obtener un producto por ID
  @Get('/findOne')
  async findOne(@Query('id') id: string): Promise<ProductEntity> {
    return this.productService.findOne(id);
  }

  // Obtener todos los productos por ID de usuario
  @Get('/findAllByUserId')
  async findAllByUserId(@Query('id') id: string): Promise<ProductEntity[]> {
    return this.productService.findAllByUserId({ id });
  }

  // Obtener un producto aleatorio
  @Get('/findRandom')
  async findRandom(): Promise<ProductEntity> {
    return this.productService.findRandom();
  }

  // Eliminar un producto por ID
  @Delete('/')
  async remove(@Query('id') id: string): Promise<void> {
    return this.productService.remove(id);
  }

    // Actualizar un producto por ID
    @Put()
    async update(@Body() dto: UpdateProductDto): Promise<ProductEntity> {
      return this.productService.update(dto);
    }


    @Get('/findAllByCategoryNameOrProductName')
    async findAllByCategoryNameOrProductName(@Query('searchTerm') searchTerm: string): Promise<ProductEntity[]> {
      return this.productService.findAllByCategoryNameOrProductName(searchTerm);
    }
}
