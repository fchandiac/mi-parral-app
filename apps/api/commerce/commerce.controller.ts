import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { CommerceService } from './commerce.service';
// import { UpdateServiceDto } from './update-service.dto'; // DTO para actualizar servicio
import { ByIdDto } from '../../libs/dto/common/by-id.dto';
import { query } from 'express';
import { CommerceEntity } from 'apps/libs/entities/commerces/commerce.entity';
import { CreateCommerceDto } from 'apps/libs/dto/commerce/create-commerce.dto';
import { UpdateCommerceDto } from 'apps/libs/dto/commerce/update-commerce.dto';

@Controller('commerces')
export class CommerceController {
  constructor(private readonly commerceService: CommerceService) {}

  // Crear un nuevo servicio
  @Post()
  async create(@Body() dto: CreateCommerceDto): Promise<CommerceEntity> {
    return this.commerceService.create(dto);
  }

  // Obtener todos los servicios
  @Get()
  async findAll(): Promise<CommerceEntity[]> {
    return this.commerceService.findAll();
  }

  //Obtener un servicio por ID
  @Get('/findOne')
  async findOne(@Query('id') dto: string): Promise<CommerceEntity> {
    return this.commerceService.findOne(dto);
  }

  @Get('/findAllByUserId')
  async findAllByUserId(@Query('id') id: string): Promise<CommerceEntity[]> {
    return this.commerceService.findAllByUserId({ id });
  }

  @Get('/findRandom')
  async findRandom(): Promise<CommerceEntity> {
    return this.commerceService.findRandom();
  }

  @Get('/findAllByCategoryNameOrCommerceName')
  async findAllByCategoryNameOrCommerceName(
    @Query('searchTerm') searchTerm: string,
  ): Promise<CommerceEntity[]> {
    return this.commerceService.findAllByCategoryNameOrCommerceName(searchTerm);
  }

  //UPDATE
  @Put()
  async update(@Body() dto: UpdateCommerceDto): Promise<CommerceEntity> {
    return this.commerceService.update(dto);
  }

  // Eliminar un servicio por ID
  @Delete('/')
  async remove(@Query('id') id: string): Promise<void> {
    return this.commerceService.remove(id);
  }

  //async findOneById(dto: ByIdDto): Promise<CommerceEntity> {
  @Get('/findOneById')
  async findOneById(@Param('id') id: string): Promise<CommerceEntity> {
    return this.commerceService.findOneById({ id });
  }
}
